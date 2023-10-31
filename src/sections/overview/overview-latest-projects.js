import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import dayjs from "dayjs";
import { useLanguage } from "src/contexts/language-context";

export const OverviewLatestProjects = (props) => {
  const { projects = [], sx } = props;

  const { renderLanguage } = useLanguage();

  return (
    <Card sx={sx}>
      <CardHeader title={renderLanguage("ბოლოს დამატებული პროექტები", "Last added projects")} />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800, width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{renderLanguage("სათაური ქართულად", "Title on Georgian")}</TableCell>
                <TableCell>{renderLanguage("სათაური ინგლისურად", "Title on English")}</TableCell>
                <TableCell>{renderLanguage("დამატებულია", "Created At")}</TableCell>
                <TableCell>{renderLanguage("ნახვები", "Views")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects?.map((item) => {
                return (
                  <TableRow hover key={item.id}>
                    <TableCell>{item.title_ka.substring(0, 18)}</TableCell>
                    <TableCell>{item.title_eng.substring(0, 18)}</TableCell>
                    <TableCell>
                      {dayjs(new Date(item.created_at).toISOString()).format("DD/MM/YYYY hh:mm")}
                    </TableCell>
                    <TableCell>123</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          {renderLanguage("ყველას ნახვა", "View All")}
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestProjects.prototype = {
  projects: PropTypes.array,
  sx: PropTypes.object,
};
