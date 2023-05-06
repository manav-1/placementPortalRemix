import {
  Button,
  Flex,
  Grid,
  MultiSelect,
  Space,
  Title,
  rem,
} from "@mantine/core";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import * as excelJs from "exceljs";

export default function Admin() {
  const { opportunities } = useLoaderData();
  const [selectedOpportunities, setSelectedOpportunities] =
    useState<string[]>();
  const [reportError, setReportError] = useState<string>();

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
          <Flex align={reportError ? "center" : "flex-end"}>
            <MultiSelect
              searchable
              clearable
              required
              error={reportError}
              placeholder="Select an opportunity to generate report"
              nothingFound={"No opportunities found"}
              w={rem(500)}
              label="Generate Report"
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
            Portal - Admins & Sub-Admins
          </Title>
        </Grid.Col>
      </Grid>
    </>
  );
}
