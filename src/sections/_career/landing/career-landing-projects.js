import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _caseStudies, _testimonials, _marketingPosts } from 'src/_mock';

import MarketingNewsletter from '../../_marketing/marketing-newsletter';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingCaseStudyList from '../../_marketing/list/marketing-case-study-list';
import MarketingTestimonial from '../../_marketing/testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from '../../_marketing/landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function CareerProjects() {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our projects</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={_caseStudies} />
      </Container>

      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
