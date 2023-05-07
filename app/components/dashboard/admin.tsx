import {
  Button,
  Checkbox,
  createStyles,
  Flex,
  Grid,
  Input,
  MultiSelect,
  Select,
  Space,
  Table,
  Title,
  rem,
} from "@mantine/core";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useState } from "react";
import * as excelJs from "exceljs";
import { type User } from "@prisma/client";
import {
  IconCheck,
  IconDeviceFloppy,
  IconEdit,
  IconX,
} from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { UpdateUserSchema } from "~/utils/admin/types";

const useStyles = createStyles((theme) => ({
  table: {
    "& th": {
      fontWeight: 600,
      textAlign: "center",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    },
    "& td": {
      // textAlign: "center",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    },
  },
}));

export default function Admin() {
  const { opportunities, users } = useLoaderData();
  const [selectedOpportunities, setSelectedOpportunities] =
    useState<string[]>();
  const [reportError, setReportError] = useState<string>();

  const { classes } = useStyles();

  const handleReportGeneration = async () => {
    if (!selectedOpportunities || selectedOpportunities.length === 0) {
      setReportError("Select opportunities first for generating report");
      return;
    }
    const data = await fetch(
      `admin/opportunity/?selectedOpportunities=${selectedOpportunities}`
    );
    const { opportunities } = await data.json();
    console.log(opportunities);
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet("Applicants");
    worksheet.columns = [];
  };

  return (
    <>
      <Title order={2} size="h1" mb="md" weight={900}>
        Admin Dashboard
      </Title>

      <Grid>
        <Grid.Col lg={6} sm={12}>
          <Title order={2} size="h2" mb="md" weight={600}>
            Generate Report
          </Title>
          <Flex align={reportError ? "center" : "flex-end"}>
            <MultiSelect
              searchable
              clearable
              required
              error={reportError}
              placeholder="Select an opportunity to generate report"
              nothingFound={"No opportunities found"}
              w={rem(500)}
              maxDropdownHeight={200}
              data={opportunities}
              value={selectedOpportunities}
              clearButtonProps={{ onClick: () => setSelectedOpportunities([]) }}
              onChange={(value) => {
                setSelectedOpportunities(value);
                setReportError(undefined);
              }}
            />
            <Space w="xs" />
            <Button onClick={handleReportGeneration}> Generate </Button>
          </Flex>
        </Grid.Col>
        <Grid.Col lg={6} sm={12}>
          <Title order={2} size="h2" mb="md" weight={600}>
            Users
          </Title>

          <Table
            className={classes.table}
            verticalSpacing={"xs"}
            horizontalSpacing={"sm"}
            mah={600}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            {users.map((user: User) => (
              <Row user={user} key={user.id} />
            ))}
          </Table>
        </Grid.Col>
      </Grid>
    </>
  );
}

const Row = ({ user }: { user: User }) => {
  const [editable, setEditable] = useState(false);
  const submit = useSubmit();
  const userForm = useForm({
    initialValues: {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    },
    validate: zodResolver(UpdateUserSchema),
  });

  const handleUserUpdate = async () => {
    if (userForm.isValid()) {
      const formData = new FormData();
      formData.append("name", userForm.values.name);
      formData.append("mobile", userForm.values.mobile);
      formData.append("email", userForm.values.email);
      formData.append("role", userForm.values.role);
      formData.append("isActive", userForm.values.isActive.toString());
      formData.append("id", user.id);
      submit(formData, {
        method: "PUT",
        action: "/dashboard/admin/user",
      });
      setEditable(false);
    }
  };

  if (!editable)
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.mobile}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td align="center">{user.isActive ? <IconCheck /> : <IconX />}</td>
        <td>
          <Button
            w="100%"
            type="button"
            variant="subtle"
            onClick={() => setEditable(true)}
          >
            <IconEdit />
          </Button>
        </td>
      </tr>
    );
  else
    return (
      <tr key={user.id}>
        <td>
          <Input name="name" {...userForm.getInputProps("name")} />
        </td>
        <td>
          <Input name="mobile" {...userForm.getInputProps("mobile")} />
        </td>
        <td>
          <Input name="email" {...userForm.getInputProps("email")} />
        </td>
        <td>
          <Select
            data={["ADMIN", "SUB_ADMIN", "USER"]}
            name="role"
            {...userForm.getInputProps("role")}
          />
        </td>
        <td align="center">
          <Checkbox
            name="isActive"
            checked={userForm.values.isActive}
            {...userForm.getInputProps("isActive")}
          />
        </td>
        <td>
          <Button
            w="100%"
            variant="subtle"
            form={user.id}
            type="submit"
            onClick={handleUserUpdate}
          >
            <IconDeviceFloppy />
          </Button>
        </td>
      </tr>
    );
};
