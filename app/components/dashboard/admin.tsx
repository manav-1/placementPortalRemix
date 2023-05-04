import { Button, Flex, Grid, Select, Space, Title, rem } from "@mantine/core";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import * as excelJs from "exceljs";

export default function Admin() {
  const { opportunities } = useLoaderData();
  const [selectedOpportunity, setSelectedOpportunity] = useState<
    string | null
  >();

  const handleReportGeneration = async () => {
    console.log("Generating report for opportunity", selectedOpportunity);
    const data = await fetch(`admin/opportunity/${selectedOpportunity}`);
    const { opportunities } = await data.json();
    console.log(opportunities);
    const workbook = new excelJs.Workbook();
    const worksheet = workbook.addWorksheet("Opportunities");
    worksheet.columns = [];
  };

  return (
    <>
      <Title order={2} size="h1" mb="md" weight={900}>
        Admin Dashboard
      </Title>

      <Grid>
        <Grid.Col lg={6} sm={12}>
          <Flex align="flex-end">
            <Select
              w={rem(500)}
              label="Generate Report"
              value={selectedOpportunity}
              onChange={(value) => setSelectedOpportunity(value)}
              placeholder="Select an opportunity to generate report"
              data={opportunities}
            />
            <Space w="xs" />
            <Button onClick={handleReportGeneration}> Generate </Button>
          </Flex>
        </Grid.Col>
        <Grid.Col lg={6} sm={12}>
          <Title order={2} size="h2" mb="md" weight={600}>
            Generate Report
          </Title>
        </Grid.Col>
      </Grid>
    </>
  );
}
