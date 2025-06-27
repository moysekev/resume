import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from "@mui/icons-material/Phone";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
import { blue, green } from "./theme";
import { Container, useMediaQuery } from "@mui/material";

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
  logos,
  strongSkills,
  positions,
  educations,
  languages,
  leisures
} = resume;


const formatDateText = (startDate: string, endDate?: string) => {
  const dateEnd: Date = endDate ? new Date(Date.parse(endDate)) : new Date();
  //const endDateText: string = endDate ? format(dateEnd, "MMMM yyyy") : "Present";

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

const hasProperty = (obj: any, prop: string): boolean => {
  return prop in obj;
};

export default function App() {

  const printable = true;

  // const linkedInId = () => {
  //   var lastPart = '';
  //   var url = linkedIn;
  //   if (url !== '') return '';
  //   while (lastPart === '') {
  //     const n = url.lastIndexOf('/');
  //     lastPart = url.substring(n + 1);
  //     url = url.substring(0, n);
  //   }
  //   return lastPart
  // }

  const _header = (<Stack sx={{ backgroundColor: green[200], p: 1.7 }} spacing={2}>
    <Stack direction='row' spacing={1}
      alignItems='center' justifyContent='space-between'>
      <Stack spacing={1}>
        <Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          {firstName} {lastName}</Typography>
        <Typography variant="subtitle1" sx={{ fontSize: { xs: '.8rem', sm: '1rem' } }}>
          {age}</Typography>
      </Stack>
      <Avatar alt={`${firstName} ${lastName}`} src={new URL('../assets/' + picture, import.meta.url).href} sx={{ width: 96, height: 96 }} />
      <Stack>
        {linkedIn && linkedIn !== '' &&
          <Link underline="hover" href={linkedIn}>
            <Stack direction='row' alignItems='center' spacing={1}>
              {/* <ListItemIcon sx={{ color: "unset" }}> */}
              <img src={new URL('../assets/' + 'linkedin.png', import.meta.url).href} width='20px' alt='' />
              {/* </ListItemIcon> */}
              <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: { xs: '.6rem', sm: '.8rem' } }} >
                {linkedIn.substring(linkedIn.lastIndexOf('/') + 1)}
              </Typography>
            </Stack>
          </Link>}
        <Link underline="hover" href={`mailto:${email}`}>
          <Stack direction='row' alignItems='center' spacing={1}>
            {/* <ListItemIcon sx={{color: "unset" }}> */}
            <EmailIcon fontSize="small" />
            {/* </ListItemIcon> */}
            <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: { xs: '.6rem', sm: '.8rem' } }}>
              {email}
            </Typography>
          </Stack>
        </Link>
        <Link underline="hover" href={`tel:${phone}`}>
          <Stack direction='row' alignItems='center' spacing={1}>
            {/* <ListItemIcon sx={{  color: "unset" }}> */}
            <PhoneIcon fontSize="small" />
            {/* </ListItemIcon> */}
            <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: { xs: '.6rem', md: '.8rem' } }}>
              {phone}
            </Typography>
          </Stack>
        </Link>
        <Stack direction='row' alignItems='center' spacing={1}>
          {/* <ListItemIcon sx={{ color: "unset" }}> */}
          <LocationOnIcon color="primary" fontSize="small" />
          {/* </ListItemIcon> */}
          <Stack>
            {address.map((line, index) => <Typography key={index}
              sx={{ fontSize: { xs: '.6rem', md: '.8rem' } }}
              color="primary"
              variant="subtitle2"
              component="div">
              {line}
            </Typography>)}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider>
      <Typography variant="overline" fontWeight={700} sx={{ fontSize: { xs: '.7rem', sm: '1rem' } }}>{title}</Typography>
    </Divider>
    <Stack spacing={.7}>
    {summary.map((line, index) => <Typography key={index} variant="body1" align='justify'>
      {line}
    </Typography>)}
    </Stack>
    {/* <Typography variant="body1" align='justify'>
      {summary}
    </Typography> */}
  </Stack>);

  const _positions = positions.map((position, index) =>
    <Stack key={index} spacing={0}>
      {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography variant="h6">
          {position.title}
        </Typography>
        <Chip variant="outlined" color='primary' size="small" label={
          index === 0 ?
            'depuis ' + format(Date.parse(position.startDate), "MMMM yyyy", { locale: fr })
            : formatDateText(position.startDate, position.endDate)
        } />
        <Typography variant="caption" color="primary" component="span">{position.domains?.join(', ')}</Typography>
        <Stack direction='row' spacing={1} alignItems='center'>
          {position.logo && <img src={new URL('../assets/'+position.logo, import.meta.url).href} width='24px' alt='' />}
          <Typography variant="subtitle2">
            {position.name}
          </Typography>
        </Stack>
      </Stack> */}
      <Grid container spacing={{ xs: .2, sm: 1 }} alignItems='center'>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack direction='row' spacing={2} alignItems='center' justifyContent="space-between">
            <Typography variant="h6" sx={{ whiteSpace: 'nowrap' }}>
              {position.title}
            </Typography>
            <Chip variant="outlined" color='primary' size="small" label={
              index === 0 ?
                '🗓️ ' + format(Date.parse(position.startDate), "MMMM yyyy", { locale: fr })
                // commented out, otherwise the resume must be updated every month but this is not possible when printed ;)
                // + ', ' + formatDateText(position.startDate, position.endDate)
                : formatDateText(position.startDate, position.endDate)
            } />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack direction='row' spacing={2} alignItems='center' justifyContent="space-between">
            <Typography variant="caption" color="primary" component="span" sx={{ fontSize: { xs: '.6rem', sm: '.7rem' } }}>{position.domains?.join(', ')}</Typography>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Stack>
                <Typography color="primary" variant="subtitle2" sx={{ fontSize: { xs: '.6rem', sm: '.7rem' }, whiteSpace: 'nowrap' }}>
                  {position.name}
                </Typography>
                <Typography color="primary" variant="subtitle2" sx={{ fontSize: { xs: '.6rem', sm: '.7rem' }, whiteSpace: 'nowrap' }}>
                  {position.location}
                </Typography>
              </Stack>
              {position.logo && <img src={new URL('../assets/' + position.logo, import.meta.url).href} width='24px' alt='' />}
              {/* {position.logos && position.logos.map((logo, index) => <img key={index} src={new URL('../assets/'+logo, import.meta.url).href} width='24px' alt='' />)} */}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Typography variant="body1" align='justify'>{position.summary}</Typography>
      {(index === 0 || index === 1) && position.details && <Stack component='ul'>
        {position.details.map((detail, index) => <Typography key={index} variant="body2" align='justify' component='li'>
          {detail}
        </Typography>)}
      </Stack>}
    </Stack >);

  const _educations = (<Stack>{educations.map((education, index) =>
    <Stack key={index} direction='row' spacing={1} alignItems='center'>
      <Typography variant="caption" color="primary" component="span" sx={{ fontSize: { xs: '.6rem', sm: '.7rem' } }}>
        {education.dateText}
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: '.6rem', sm: '.7rem' } }}>
            {education.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: { xs: '.6rem', sm: '.7rem' } }}>
            {education.location}
          </Typography>
        </Stack>
      </Box>
    </Stack>)}
  </Stack>);

  const _skills = (key: string) => <Box sx={{
    display: 'flex',
    flexWrap: 'wrap', // Allows chips to wrap to the next line
    gap: .7 // Adds some space between chips
  }} >
    {((skills as any)[key]).map((skill: string, index: number) =>
      <Chip sx={{
        fontWeight: strongSkills.includes(skill) ? 'bold' : 'regular',
      }} key={index} color={'light_green' as any} size="small"
        avatar={hasProperty(logos, skill) ? <Avatar alt={skill} src={new URL('../assets/' + (logos as any)[skill], import.meta.url).href} /> : undefined}
        label={skill} />)}
    {/* size={strongSkills.includes(skill) ? "medium" : "small"} */}
  </Box>;

  const _languages = <Box sx={{ display: 'flex', justifyContent: 'center' }} >
    {/* <Stack spacing={1}>
      {languages.map((language, index) =>
        language.name
      )}
    </Stack> */}
    <Stack direction='column' spacing={1}>
      {languages.map((language, index) =>
        <Stack key={index}>
          <Chip sx={{
            fontWeight: 'bold',
          }} color={'light_green' as any} size="medium"
            label={language.name} />
          <Typography variant="body1" align='center'>
            {language.details}
          </Typography>
        </Stack>
      )}
    </Stack>
  </Box>

  const _leisures = <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Stack direction='row' spacing={2.7} alignItems='center'>
      {leisures.map((leisure, index) =>
        <img key={index} src={new URL('../assets/' + leisure.icon, import.meta.url).href} width='28px' alt={leisure.name} />
      )}
    </Stack>
  </Box>;

  const isMobile = useMediaQuery('(max-width:600px)');

  const _content = <Stack sx={{ mt: { xs: 1, sm: 2 }, mb: { xs: 1, sm: 2 } }} spacing={2}>
    {_header}
    <Grid container spacing={2}>
      <Grid sx={{ mt: { xs: 0, sm: 2 } }}
        size={{ xs: 12, sm: 4 }}>
        <Stack direction="column" spacing={4}
          sx={{
            height: '100%',
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <Stack spacing={2}>
            {_skills("general")}
            {_skills("frameworks")}
            {_skills("languages")}
            {_skills("systems")}
            {_skills("others")}
          </Stack>
          {/* <Divider variant="middle" /> */}
          {_languages}
          {!isMobile && _leisures}
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 8 }}>
        <Stack spacing={2}>
          {_positions}
          <Divider variant="middle" />
          {_educations}
          {isMobile && _leisures}
        </Stack>
      </Grid>
    </Grid>
  </Stack>;

  return (
    // <Container maxWidth="lg" sx={{}}>
    // Use a Box instead to center Paper inside it
    // maxWidth="sm" sx={{ overflowX: 'hidden' }}
    <Container maxWidth={isMobile ? "sm" : undefined} sx={{
      overflowX: 'hidden',
      width: isMobile ? undefined : "21cm"
    }}>
      <Box display={isMobile ? undefined : "flex"}
        flexDirection="column"
        justifyContent='center'
        alignItems='center'>
        {_content}
      </Box >
    </Container>
  );
}

//  {printable ?
{/* <Box sx={{ width: isMobile ? undefined : "21cm", p: 2 }}></Box> */ }
{/* //  height: "29.7cm"
          <Paper sx={{ width: "21cm", p: 4 }}>
            {_content}
          </Paper>} */}