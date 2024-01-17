import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Statistics = () => {
  const statistics = [
    {
      title: "Sales Obtained",
      stat: 3452341234,
      percentage: "23%",
    },
    {
      title: "New Clients",
      stat: 345,
      percentage: "23%",
    },
    {
      title: "Traffic Received",
      stat: 341234,
      percentage: "23%",
    }
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2px",
      }}>
      {statistics.map(({ title, stat, percentage }) => {
        return (
          <Card>
            <CardContent>
              <Typography>{title}</Typography>
            </CardContent>
            <CardContent>
              <Typography>{stat}</Typography>
            </CardContent>
            <CardContent>
              <Typography>{percentage}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Statistics;
