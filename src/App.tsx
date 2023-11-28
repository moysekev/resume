import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from "@mui/icons-material/Phone";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';


import { format, formatDuration, intervalToDuration } from "date-fns";

import Avatar from "@mui/material/Avatar";
import Chip from '@mui/material/Chip';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import fr from "date-fns/locale/fr";
import resume from "./data/resume.json";

/* remove margins when printing */
import './App.css';

const {
  firstName,
  lastName,
  age,
  linkedIn,
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


const formatDateText = (startDate: string, endDate?: string) => {
  const dateEnd: Date = endDate ? new Date(Date.parse(endDate)) : new Date();
  const endDateText: string = endDate ? format(dateEnd, "MMMM yyyy") : "Present";

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

  const printable = true;

  const linkedInId = () => {
    var lastPart = '';
    var url = linkedIn;
    if (url !== '') return '';
    while (lastPart === '') {
      const n = url.lastIndexOf('/');
      lastPart = url.substring(n + 1);
      url = url.substring(0, n);
    }
    return lastPart
  }

  const header = (<Stack sx={{ backgroundColor: '#a0b4c0', p: 2 }}>
    <Stack direction='row' spacing={1}
      alignItems='center' justifyContent='space-between'>
      <Stack spacing={1}>
        <Typography variant="h3" fontWeight={700} fontSize={32}>
          {firstName} {lastName}</Typography>
        <Typography variant="subtitle1">
          {age}</Typography>
      </Stack>
      <Avatar alt={`${firstName} ${lastName}`} src={picture} sx={{ width: 96, height: 96 }} />
      <Stack spacing={.7}>
        {linkedIn && linkedIn !== '' &&
          <Link underline="hover" href={linkedIn}>
            <Stack direction='row' alignItems='center'>
              <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
                <img src={'/linkedin.png'} width='24px' alt='' />
              </ListItemIcon>
              <Typography variant="subtitle2" fontWeight={700}>
                {linkedInId()}
              </Typography>
            </Stack>
          </Link>}
        <Link underline="hover" href={`mailto:${email}`}>
          <Stack direction='row' alignItems='center'>
            <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
              <EmailIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="subtitle2" fontWeight={700}>
              {email}
            </Typography>
          </Stack>
        </Link>
        <Link underline="hover" href={`tel:${phone}`}>
          <Stack direction='row' alignItems='center'>
            <ListItemIcon sx={{ minWidth: 32, color: "unset" }}>
              <PhoneIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="subtitle2" fontWeight={700}>
              {phone}
            </Typography>
          </Stack>
        </Link>
        <Stack direction='row' alignItems='center'>
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
    <Divider>
      <Typography variant="overline" fontWeight={700}>{title}</Typography>
    </Divider>
    <Typography variant="body1" align='justify'>
      {summary}
    </Typography>
  </Stack>);

  const _positions = positions.map((position, index) =>
    <Stack key={index}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography variant="h6">
          {position.title}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={1}>
          {/* <Typography variant="caption" color="primary" component="span">
            {formatDateText(position.startDate, position.endDate)}
          </Typography> */}
          {index === 0 ?
            <Chip variant="outlined" color="primary" label={'depuis ' + format(Date.parse(position.startDate), "MMMM yyyy", { locale: fr })} />
            :
            <Chip variant="outlined" color="primary" label={formatDateText(position.startDate, position.endDate)} />}

          <Typography variant="caption" color="secondary" component="span">{position.domains?.join(', ')}</Typography>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center'>
          {position.logo && <img src={position.logo} width='24px' alt='' />}
          <Typography variant="subtitle2">
            {position.name}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body1" align='justify'>{position.summary}</Typography>
      {index === 0 && <Stack>
        {position.details.map((detail, index) => <Typography variant="body2" align='justify'>
          {detail}
        </Typography>)}
      </Stack>}
      <Stack sx={{ mt: .7 }} direction='row' spacing={0.1}>
        {/* variant="outlined" */}
        {/* sx={{ bgcolor: '#a5bead' }} */}
        {position.skills?.map((skill, index) => <Chip key={index} color="info" label={skill} />)}
      </Stack>
    </Stack>);

  const _educations = educations.map((education, index) =>
    <Stack key={index} direction='row' spacing={2} alignItems='center'>
      <Typography variant="caption" color="primary" component="span">
        {education.dateText}
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant="subtitle1">
            {education.name}
          </Typography>
          <Typography variant="subtitle2">
            {education.location}
          </Typography>
        </Stack>
      </Box>
    </Stack>)

  const _content = <>
    {header}
    <Stack sx={{ mt: 2 }} spacing={3.3}>
      {_positions}
      <Stack>
        {_educations}
      </Stack>
    </Stack>
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} >
      <Stack direction='row' spacing={2.7} alignItems='center'>
        {leisures.map((leisures, index) =>
          <img key={index} src={leisures.icon} width='28px' alt={leisures.name} />
        )}
      </Stack>
    </Box>
  </>;

  return (
    // <Container maxWidth="lg" sx={{}}>
    // Use a Box instead to center Paper inside it
    <Box display="flex"
      justifyContent='center'
      alignItems='center'>
      {printable ? <Box sx={{ width: "21cm", p: 4 }}>
        {_content}
      </Box> :
        //  height: "29.7cm"
        <Paper sx={{ width: "21cm", p: 4 }}>
          {_content}
        </Paper>}
    </Box >
  );
}
