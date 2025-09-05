import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DemoTable() {
  return (<Table>
    <TableHeader>
      <TableRow>
        <TableHead>First Name</TableHead>
        <TableHead>Last Name</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Marcelo</TableCell>
        <TableCell>Adamatti</TableCell>
      </TableRow>
    </TableBody>
  </Table>)
}