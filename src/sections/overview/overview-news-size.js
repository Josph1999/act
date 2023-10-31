import PropTypes from "prop-types";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { useLanguage } from "src/contexts/language-context";

export const OverviewNewsSize = (props) => {
  const { sx, value } = props;

  const user = useMockedUser();

  const { renderLanguage } = useLanguage();

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {renderLanguage("სულ დამატებული სიახლეები", "Total Added News")}
            </Typography>
            <Typography variant="h3">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon></SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewNewsSize.prototypes = {
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};
