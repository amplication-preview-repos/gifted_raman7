import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="FullName" source="fullName" />
        <TextField label="Email" source="email" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="DateOfBirth" source="dateOfBirth" />
      </Datagrid>
    </List>
  );
};
