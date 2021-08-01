import styled from "styled-components";

export const Table = styled.table`
  border: 0.5px solid #ebebeb;
  width: 100%;
`;

export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
`;

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
`;
export const Td = styled.td`
  padding: 0.75rem;
  vertical-align: center;
  border-bottom: 1px solid #ebebeb;
`;

export const Th = styled.th`
  vertical-align: bottom;
  text-align: inherit;
  padding: 0.75rem;
  vertical-align: top;
  border-bottom: 3px solid #ebebeb;
`;
