import { Button, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CommonNav from "../../components/common/CommonNav";

const Index = () => {
    return (
        <>
            <CommonNav />
            <Grid container spacing={2} className="p-20">
                <Grid item xs={2} mt={1} style={{ textAlign: "right" }}>
                    <div>Filter by Technology</div>
                </Grid>
                <Grid item xs={10}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">FRONTEND</Button>
                        <Button variant="outlined">BACKEND</Button>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container className="p-20">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.No</TableCell>
                                <TableCell>Project</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Technology</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">1</TableCell>
                                <TableCell>Todo List</TableCell>
                                <TableCell>List of tasks you need to complete or things that you want to do.</TableCell>
                                <TableCell>NEXT JS</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell>
                                    <Button variant="outlined">View</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
}

export default Index;