import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from "@mui/icons-material/Phone";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import { format, formatDuration, intervalToDuration } from "date-fns";


import Chip from '@mui/material/Chip';
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';
import fr from "date-fns/locale/fr";
import resume from "./data/resume.json";
import Avatar from "@mui/material/Avatar";

const {
  firstName,
  lastName,
  picture,
  title,
  address,
  summary,
  email,
  phone,
  website,
  skills,
  positions,
  educations,
  leisures
} = resume;


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const formatDateText = (startDate: string, endDate?: string) => {
  const dateEnd: Date = endDate ? new Date(Date.parse(endDate)) : new Date();
  const endDateText: string = endDate
    ? format(dateEnd, "MMMM yyyy")
    : "Present";

  return (
    // format(Date.parse(startDate), "MMMM yyyy") +
    // " to " +
    // endDateText +
    // " (" +
    formatDuration(
      intervalToDuration({
        start: Date.parse(startDate),
        end: endDate ? Date.parse(endDate) : new Date(),
      }),
      { format: ["years", "months"], locale: fr },
    )
    // +")"
  );
};

export default function App() {

  return (
    <Container maxWidth="md">
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Stack>
          {/*  */}
          <Typography variant="button" fontWeight={700} fontSize={32}>
            {firstName} {lastName}</Typography>
            <Avatar alt={`${firstName} ${lastName}`} src={picture} sx={{ width: 56, height: 56 }} />
        </Stack>
        <Stack spacing={.7}>
          <Link underline="hover" href={`mailto:${email}`}>
            <Stack direction="row" alignItems='center'>
              <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
                <EmailIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="subtitle2" fontWeight={700}>
                {email}
              </Typography>
            </Stack>
          </Link>
          <Link underline="hover" href={`tel:${phone}`}>
            <Stack direction="row" alignItems='center'>
              <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
                <PhoneIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="subtitle2" fontWeight={700}>
                {phone}
              </Typography>
            </Stack>
          </Link>
          <Stack direction="row" alignItems='center'>
            <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
              <LocationOnIcon fontSize="small" />
            </ListItemIcon>
            <Stack>
              {address.map((line, index) => <Typography key={index} variant="subtitle2" component="div">
                {line}
              </Typography>)}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ my: 2 }}><Typography variant="overline">
        {title}</Typography></Divider>
      <Stack spacing={1}>
        {/* <Paper sx={{ p: 1 }}> */}
        <Stack spacing={2}>
          {positions.map((position, index) => <Box key={index}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">
                {position.title}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="caption" color="primary" component="div">
                  {formatDateText(position.startDate, position.endDate)}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {position.domains?.map((domain, index) => <Typography key={index} variant="caption" color="secondary" component="span">
                    {domain}
                  </Typography>)}
                </Stack>
              </Stack>
              <Typography variant="subtitle2">
                {position.name}
              </Typography>
            </Stack>
            <Typography variant="body1">{position.summary}</Typography>
            <Box sx={{ mt: .7 }}>
              {position.skills?.map((skill, index) => <Chip key={index} label={skill} variant="outlined" />)}
            </Box>
          </Box>)}
        </Stack>
        {/* </Paper> */}
        <Divider sx={{ mt: 1 }}>-</Divider>
        <Stack>
          {/* <Typography variant="h5" component="h5">
          Formation
        </Typography> */}
          {educations.map((education, index) => <Box key={index}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="caption" color="primary" component="span">
                {education.dateText}
              </Typography>
              <Box sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1">
                    {education.name}
                  </Typography>
                  <Typography variant="subtitle2">
                    {education.location}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>)}
        </Stack>
        {/* <Divider /> */}
        <Box sx={{ p: 1, display: 'flex', justifyContent: "center" }} >
          {/* <Typography variant="h5" component="h5">
            Loisirs
          </Typography> */}
          <Stack sx={{ mt: 1 }} direction="row" spacing={2} alignItems="center">
            {leisures.map((leisures, index) =>
              <img src={leisures.icon} width='32px' alt='foo' />
            )}
          </Stack>
        </Box>
      </Stack>
    </Container >
  );
}
