import { useContext, useState } from 'react';
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Text,
  rem,
  Button,
  Title,
  UnstyledButton,
  TextInput,
  Flex,
  Tooltip,
  Select,
  Space,
} from '@mantine/core';
import { IconAddressBook, IconTrash } from '@tabler/icons-react';
import { useForm, zodResolver } from '@mantine/form';
import { useLoaderData, useRevalidator } from '@remix-run/react';
import { ContactSchema } from '~/utils/admin/types';
import PaginationWithSearch from './paginate';
import { SnackbarContext } from '../landing/snackbar';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },

  inputRow: {
    backgroundColor: 'red',
    margin: `${theme.spacing.md}`,
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
}));

interface ThProps {
  children: React.ReactNode;
}
interface RowData {
  id: string;
  name: string;
  email: string;
  mobile: string;
  position: string;
  addedBy: string;
  company: string;
}

function Th({ children }: ThProps) {
  const { classes } = useStyles();
  return (
    <th className={classes.th}>
      <UnstyledButton className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </th>
  );
}

export default function Contacts() {
  const {
    contacts,
    pagination,
    templates,
  }: {
    contacts: RowData[];
    templates: {
      value: string;
      id: string;
    }[];
    pagination: {
      page: number;
      totalPages: number;
    };
  } = useLoaderData();

  const { classes } = useStyles();
  const [selection, setSelection] = useState<string[]>([]);
  const [templateId, setTemplateId] = useState<string | null>();
  const [subject, setSubject] = useState<string | undefined>(
    'Invitation for Placement Season 2023-24',
  );

  const { displayMsg } = useContext(SnackbarContext);

  const toggleRow = (rowId: string) =>
    setSelection((current) =>
      current.includes(rowId)
        ? current.filter((item) => item !== rowId)
        : [...current, rowId],
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === contacts.length ? [] : contacts.map((item) => item.id),
    );

  const rows = contacts.map((item: any) => (
    <ContactRow
      item={item}
      toggleRow={toggleRow}
      key={item.id}
      selection={selection}
    />
  ));

  const handleSendEmail = async () => {
    if (!templateId) {
      displayMsg('Please select a template first');
      return;
    }
    if (selection.length === 0) {
      displayMsg('Please select contacts first');
      return;
    }
    if (!subject) {
      displayMsg('Please enter the subject first');
      return;
    }
    const data = await Promise.all(
      selection.map((selectionId) =>
        fetch(
          `/admin/contacts/${selectionId}?templateId=${templateId}&subject=${subject}`,
          {
            method: 'POST',
          },
        ),
      ),
    );
    if (data.every((item) => item.ok)) {
      setSelection([]);
      displayMsg('Emails Sent Successfully');
    } else {
      const failedEmails = data.filter((item) => !item.ok).join(', ');
      displayMsg(
        `Something went wrong with some emails ${[
          failedEmails,
        ]}, please try again`,
      );
    }
  };

  return (
    <ScrollArea>
      <Flex className={classes.headerContainer}>
        <Title order={2} size="h1" mb="md" weight={900}>
          Contacts Database
        </Title>
        <PaginationWithSearch pagination={pagination} />
      </Flex>
      <Flex justify="flex-end">
        <Button onClick={handleSendEmail}>Send Emails</Button>
        <Space w={rem(10)} />
        <TextInput
          w={rem(300)}
          variant="filled"
          placeholder="Subject for Email"
          onChange={(event) => setSubject(event.target.value)}
          value={subject}
        />
        <Space w={rem(10)} />
        <Select
          w={rem(300)}
          variant="filled"
          placeholder="Template for sending email"
          onChange={(value) => setTemplateId(value)}
          value={templateId}
          data={templates}
        />
      </Flex>
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === contacts.length}
                indeterminate={
                  selection.length > 0 && selection.length !== contacts.length
                }
                transitionDuration={0}
              />
            </th>
            <Th>Company</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Mobile</Th>
            <Th>Position</Th>
            <Th>Added By User</Th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <EditableRow />
          {rows}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

function EditableRow({ initialData }: { initialData?: RowData }) {
  const { id, name } = useLoaderData<{ id: string; name: string }>();
  const { displayMsg } = useContext(SnackbarContext);
  const revalidator = useRevalidator();

  const handleContactAdd = async () => {
    const { values } = contactForm;
    contactForm.validate();
    if (contactForm.isValid()) {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('mobile', values.mobile);
      formData.append('position', values.position);
      formData.append('company', values.company);
      if (initialData?.id) formData.append('id', initialData.id);
      const contactAdd = await fetch('', {
        method: initialData?.id ? 'PUT' : 'POST',
        body: formData,
      });
      if (contactAdd.ok) {
        revalidator.revalidate();
        displayMsg('Contact Added Successfully');
      } else if (contactAdd.status === 409)
        displayMsg('Contact Already Exists');
      else displayMsg('Something went wrong');
      contactForm.reset();
    }
  };

  const initialValues = {
    id: initialData?.id || '',
    name: initialData?.name || '',
    email: initialData?.email || '',
    mobile: initialData?.mobile || '',
    position: initialData?.position || '',
    company: initialData?.company || '',
    addedById: id,
  };

  const contactForm = useForm({
    initialValues,
    validate: zodResolver(ContactSchema),
  });
  return (
    <tr>
      <td />
      <td>
        <TextInput
          placeholder="Enter Company Name"
          {...contactForm.getInputProps('company')}
        />
      </td>
      <td>
        <TextInput
          placeholder="Enter Name"
          {...contactForm.getInputProps('name')}
        />
      </td>
      <td>
        <TextInput
          placeholder="Enter email"
          {...contactForm.getInputProps('email')}
        />
      </td>
      <td>
        <TextInput
          placeholder="Enter mobile"
          {...contactForm.getInputProps('mobile')}
        />
      </td>
      <td>
        <TextInput
          placeholder="Enter position"
          {...contactForm.getInputProps('position')}
        />
      </td>
      <td>{name}</td>
      <td>
        <Button onClick={handleContactAdd}>
          <IconAddressBook /> Add
        </Button>
      </td>
    </tr>
  );
}

function ContactRow({
  selection,
  toggleRow,
  item,
}: {
  selection: string[];
  toggleRow: (id: string) => void;
  item: any;
}) {
  const { classes, cx } = useStyles();
  const selected = selection.includes(item.id);
  const revalidator = useRevalidator();
  const { displayMsg } = useContext(SnackbarContext);

  const handleContactDelete = async (contactId: string) => {
    const data = await fetch(`/admin/contacts/${contactId}`, {
      method: 'DELETE',
    });
    if (data.ok) displayMsg('Contact Deleted Successfully');
    else displayMsg('Something went wrong');

    revalidator.revalidate();
  };
  return (
    <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
      <td>
        <Checkbox
          checked={selected}
          onChange={() => toggleRow(item.id)}
          transitionDuration={0}
        />
      </td>
      <td>{item.company}</td>
      <td>
        <Group spacing="sm">
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
      <td>{item.position}</td>
      <td>{item?.addedBy?.name}</td>

      <td>
        <Flex>
          {/* <Button
            onClick={() => setEditable(!editable)}
            variant="subtle"
            mr="sm"
          >
            <Tooltip label="Edit Contact">
              <IconEdit size={18} />
            </Tooltip>
          </Button> */}
          <Button onClick={() => handleContactDelete(item.id)} variant="subtle">
            <Tooltip label="Delete Contact">
              <IconTrash size={18} />
            </Tooltip>
          </Button>
        </Flex>
      </td>
    </tr>
  );
}
