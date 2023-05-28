import { Group, Pagination, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useLocation, useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';

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
  const [search, setSearch] = useState('');
  const [debounced] = useDebouncedValue(search, 500);
  const onPageChange = (pageNumber: number) => {
    navigate(`${locaton.pathname}?page=${pageNumber}&search=${search}`);
  };
  const onSearchChange = () => {
    navigate(`${locaton.pathname}?page=${page}&search=${debounced}`);
  };
  useEffect(onSearchChange, [debounced, locaton.pathname, navigate, page]);
  return (
    <Group>
      <Pagination value={page} total={totalPages} onChange={onPageChange} />
      <TextInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        variant="filled"
        size="sm"
        radius="sm"
      />
    </Group>
  );
}
