import { useState } from "react";
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
  Center,
  TextInput,
} from "@mantine/core";
import {
  IconAddressBook,
  IconBrandTelegram,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSelector,
} from "@tabler/icons-react";
import { keys } from "@mantine/utils";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
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
    backgroundColor: "red",
    margin: `${theme.spacing.md}`,
  },
}));

interface TableSelectionProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
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

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

export default function Contacts({ data }: TableSelectionProps) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  const rows = sortedData.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
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
          <Button>
            <IconBrandTelegram size={18} />
            Send mail
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Title order={2} size="h1" mb="md" weight={900}>
        Contacts Database
      </Title>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
                transitionDuration={0}
              />
            </th>
            <Th
              sorted={sortBy === "company"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("company")}
            >
              Company
            </Th>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === "email"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("email")}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === "mobile"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("mobile")}
            >
              Mobile
            </Th>
            <Th
              sorted={sortBy === "position"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("position")}
            >
              Position
            </Th>
            <Th
              sorted={sortBy === "addedBy"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("addedBy")}
            >
              Added By User
            </Th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <TextInput placeholder="Enter Company Name" />
            </td>
            <td>
              <TextInput placeholder="Enter Name" />
            </td>
            <td>
              <TextInput placeholder="Enter email" />
            </td>
            <td>
              <TextInput placeholder="Enter mobile" />
            </td>
            <td>
              <TextInput placeholder="Enter position" />
            </td>
            <td>Manav Arora</td>
            <td>
              <Button>
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
