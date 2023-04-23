import { Group, Pagination, TextInput } from "@mantine/core";
import { useLocation, useNavigate } from "@remix-run/react";
import type { SetStateAction } from "react";
import { useState } from "react";

export type PaginationProps = {
  pagination: {
    page: number;
    totalPages: number;
  };
};

export default function PaginationWithSearch({
  pagination: { page, totalPages },
}: PaginationProps) {
  const navigate = useNavigate();
  const locaton = useLocation();
  const [search, setSearch] = useState("");

  const onPageChange = (page: number) => {
    navigate(`${locaton.pathname}?page=${page}&search=${search}`);
  };
  const onSearchChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    navigate(`${locaton.pathname}?page=${page}&search=${e.target.value}`);
  };
  return (
    <Group>
      <Pagination value={page} total={totalPages} onChange={onPageChange} />
      <TextInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search"
        variant="filled"
        size="sm"
        radius="sm"
      />
    </Group>
  );
}
