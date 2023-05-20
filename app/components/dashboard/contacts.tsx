import { useState } from 'react';
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
} from '@mantine/core';
import {
  IconAddressBook,
  IconBrandTelegram,
  IconTrash,
} from '@tabler/icons-react';
import { useForm, zodResolver } from '@mantine/form';
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react';
import { ContactSchema } from '~/utils/admin/types';
import PaginationWithSearch from './paginate';

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
  const submit = useSubmit();

  const { id, name, contacts, pagination } = useLoaderData<{
    id: string;
    name: string;
    contacts: RowData[];
    pagination: {
      page: number;
      totalPages: number;
    };
  }>();

  const actionData = useActionData();
  if (actionData?.contact) contacts.push(actionData.contact);

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState<string[]>([]);

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

  const rows = contacts.map((item: any) => {
    const selected = selection.includes(item.id);
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
        <td>{item.addedBy}</td>

        <td>
          <Flex>
            <Button variant="subtle" mr="sm">
              <Tooltip label="Send Mail">
                <IconBrandTelegram size={18} />
              </Tooltip>
            </Button>
            <Button variant="subtle">
              <Tooltip label="Delete Contact">
                <IconTrash size={18} />
              </Tooltip>
            </Button>
          </Flex>
        </td>
      </tr>
    );
  });

  const contactForm = useForm({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      position: '',
      company: '',
      addedById: id,
    },
    validate: zodResolver(ContactSchema),
  });

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
      submit(formData, {
        method: 'POST',
      });
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
          {rows}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
