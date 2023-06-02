import {
  Button,
  Checkbox,
  createStyles,
  Flex,
  Input,
  MultiSelect,
  Select,
  Space,
  Table,
  Title,
  rem,
} from '@mantine/core';
import { useLoaderData, useSubmit } from '@remix-run/react';
import { useContext, useState } from 'react';
import * as excelJs from 'exceljs';
import type {
  Opportunity,
  OpportunityUserLink,
  UserProfile,
  Portfolio,
  Stream,
  Project,
  User,
} from '@prisma/client';
import {
  IconCheck,
  IconDeviceFloppy,
  IconEdit,
  IconX,
} from '@tabler/icons-react';
import { useForm, zodResolver } from '@mantine/form';
import { UpdateUserSchema } from '~/utils/admin/types';
import { SnackbarContext } from '../landing/snackbar';

const useStyles = createStyles((theme) => ({
  table: {
    '& th': {
      fontWeight: 600,
      textAlign: 'center',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
    '& td': {
      // textAlign: "center",
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
  },
}));

export default function Admin() {
  const { opportunities, users } = useLoaderData();
  const [selectedOpportunities, setSelectedOpportunities] =
    useState<string[]>();
  const [reportError, setReportError] = useState<string>();
  const [opportunitiesUser, setOpportunitiesUser] = useState<
    (OpportunityUserLink & {
      user: User & {
        userProfile:
          | (UserProfile & {
              links: Portfolio[];
              stream: Stream | null;
              projects: Project[];
            })
          | null;
      };
      opportunity: Opportunity;
    })[]
  >();

  const { displayMsg } = useContext(SnackbarContext);

  const { classes } = useStyles();

  const handleReportGeneration = async () => {
    if (!selectedOpportunities || selectedOpportunities.length === 0) {
      setReportError('Select opportunities first for generating report');
      return;
    }
    const data = await fetch(
      `admin/opportunity/?selectedOpportunities=${selectedOpportunities}`,
    );
    const { opportunities: opportunitiesData } = await data.json();
    setOpportunitiesUser(opportunitiesData);
  };

  const generateReport = () => {
    if (!selectedOpportunities || selectedOpportunities.length === 0) {
      displayMsg('No opportunities selected');
      return;
    }
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet('Applicants');
    worksheet.columns = [
      { header: 'Opportunity Name', key: 'opportunityName' },
      { header: 'Company Name', key: 'companyName' },
      { header: 'Job Description', key: 'jobDescription' },
      { header: 'Applicant Name', key: 'applicantName' },
      { header: 'Applicant Stream', key: 'applicantStream' },
      { header: 'Applicant Email', key: 'applicantEmail' },
      { header: 'Applicant Marks (Graduation)', key: 'marksGrad' },
      { header: 'Applicant Marks (Post Graduation)', key: 'marksPost' },
      { header: 'Applicant Marks (10th)', key: 'marks10' },
      { header: 'Applicant Marks (12th)', key: 'marks12' },
      { header: 'Applicant Resume', key: 'applicantResume' },
      { header: 'Applicant Linkedin', key: 'applicantLinkedin' },
      { header: 'Applicant Projects', key: 'applicantProjects' },
      { header: 'Applicant Links', key: 'applicantLinks' },
    ];
    opportunitiesUser?.forEach((item) =>
      worksheet.addRow({
        opportunityName: item.opportunity.name,
        companyName: item.opportunity.company,
        jobDescription: item.opportunity.jobDesc,
        applicantName: `${item.user.userProfile?.firstName} ${item.user.userProfile?.lastName}`,
        applicantStream: item.user.userProfile?.stream?.name,
        applicantEmail: item.user.email,
        marksGrad: item.user.userProfile?.marksGrad,
        marksPost: item.user.userProfile?.marksPost,
        marks10: item.user.userProfile?.marks10,
        marks12: item.user.userProfile?.marks12,
        applicantResume: item.user.userProfile?.resume,
        applicantLinkedin: item.user.userProfile?.linkedin,
        applicantProjects: item.user.userProfile?.projects
          .map((project) => project.name)
          .join(', '),
        applicantLinks: item.user.userProfile?.links
          .map((link) => link.url)
          .join(', '),
      }),
    );

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.ms-excel' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'report.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <Title order={2} size="h1" mb="md" weight={900}>
        Admin Dashboard
      </Title>
      <Title order={2} size="h2" mb="md" weight={600}>
        Generate Report
      </Title>
      <Flex align={reportError ? 'center' : 'flex-end'}>
        <MultiSelect
          searchable
          clearable
          required
          error={reportError}
          placeholder="Select an opportunity to generate report"
          nothingFound="No opportunities found"
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
      <Table
        captionSide="bottom"
        className={classes.table}
        verticalSpacing="xs"
        horizontalSpacing="sm"
        mah={600}
      >
        <caption>
          For more details wrt to applicants download&nbsp;
          <Button onClick={generateReport} variant="white" p={0}>
            report
          </Button>
        </caption>
        <thead>
          <tr>
            <th>Opportuninty Name</th>
            <th>Company Name</th>
            <th>Job Description</th>
            <th>Applicant Name</th>
            <th>Applicant Stream</th>
            <th>Applicant Email</th>
            <th>Applicant Resume</th>
          </tr>
        </thead>
        {opportunitiesUser &&
          opportunitiesUser.map((item) => (
            <tr key={item.id}>
              <td>{item.opportunity.name}</td>
              <td>{item.opportunity.company}</td>
              <td>{item.opportunity.jobDesc}</td>
              <td>{item.user.userProfile?.firstName}</td>
              <td>{item.user.userProfile?.stream?.name}</td>
              <td>{item.user.email}</td>
              <td>{item.user.userProfile?.resume}</td>
            </tr>
          ))}
      </Table>

      <Title mt="md" order={2} size="h2" mb="md" weight={600}>
        Users
      </Title>

      <Table
        className={classes.table}
        verticalSpacing="xs"
        horizontalSpacing="sm"
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
    </>
  );
}

function Row({ user }: { user: User }) {
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
      formData.append('name', userForm.values.name);
      formData.append('mobile', userForm.values.mobile);
      formData.append('email', userForm.values.email);
      formData.append('role', userForm.values.role);
      formData.append('isActive', userForm.values.isActive.toString());
      formData.append('id', user.id);
      submit(formData, {
        method: 'PUT',
        action: '/dashboard/admin/user',
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
  return (
    <tr key={user.id}>
      <td>
        <Input name="name" {...userForm.getInputProps('name')} />
      </td>
      <td>
        <Input name="mobile" {...userForm.getInputProps('mobile')} />
      </td>
      <td>
        <Input name="email" {...userForm.getInputProps('email')} />
      </td>
      <td>
        <Select
          data={['ADMIN', 'SUB_ADMIN', 'USER']}
          name="role"
          {...userForm.getInputProps('role')}
        />
      </td>
      <td align="center">
        <Checkbox
          name="isActive"
          checked={userForm.values.isActive}
          {...userForm.getInputProps('isActive')}
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
}
