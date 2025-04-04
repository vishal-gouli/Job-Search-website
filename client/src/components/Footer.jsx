import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Import your company logos (replace with actual paths)
// import googleLogo from './google.png'; // Replace with your logo path
// import amazonLogo from './amazon.png'; // Replace with your logo path
// import microsoftLogo from './microsoft.png'; // Replace with your logo path
// import appleLogo from './apple.png'; // Replace with your logo path

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 4, // Padding top and bottom
        marginTop:10
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="body2">
              © {new Date().getFullYear()} My Company. All rights reserved.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              Contact Us: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
            </Typography>
            <Typography variant="body2">
              Address: 123 Main Street, City, State, ZIP
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
            <img src={"https://fabrikbrands.com/wp-content/uploads/Jetta-Logo-1-1155x770.png"} alt="Google" style={{ height: '60px', margin: '0 5px' }} />
            <img src={"https://fabrikbrands.com/wp-content/uploads/Polestar-Logo-History-1-1155x770.png"} alt="Amazon" style={{ height: '60px', margin: '0 5px' }} />
            <img src={"https://fabrikbrands.com/wp-content/uploads/Dodge-Logo-History-1-1155x770.png"} alt="Microsoft" style={{ height: '60px', margin: '0 5px' }} />
            {/* <img src={"https://fabrikbrands.com/wp-content/uploads/Jetta-Logo-1-1155x770.png"} alt="Apple" style={{ height: '60px', margin: '0 5px' }} /> */}
          </Grid>
        </Grid>
        <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos tempore laboriosam obcaecati in est nam fuga nobis nulla doloremque quo, molestiae minima rerum aspernatur accusantium? Deserunt iusto modi, alias libero esse, earum amet iste corrupti illo nesciunt temporibus ipsa dolorem maiores voluptas vitae quis itaque laboriosam nostrum aperiam saepe facere corporis quae. Vitae praesentium dolorum tempore, mollitia rerum nam itaque perferendis. Dolorum quia aliquid numquam cum? Ipsum tempore rerum ab ut, debitis, quo deleniti laudantium totam labore sint, eveniet quam! Ad id odit provident distinctio quisquam harum fugiat reprehenderit ea adipisci sed repellendus, aliquid repellat eius magnam optio vel placeat corrupti maiores sint quas unde nihil commodi doloribus deleniti? Beatae nemo consequatur veritatis vel, sunt cumque quibusdam laudantium quae placeat! Exercitationem modi ea at enim dignissimos reiciendis corporis quae asperiores error repellat! Corrupti, culpa iure? Dolorem repellendus qui porro corporis libero facilis necessitatibus maxime quas, sit esse, voluptate nesciunt voluptatem! Quis quas animi consequuntur eos quae voluptate dolorum voluptas molestiae quo officia, vero aperiam officiis perferendis accusamus nesciunt commodi temporibus reprehenderit doloribus odio optio aliquam nisi? Ex, fugiat iste? Non accusamus, unde fugit consequatur debitis, in voluptatum eos eligendi similique ipsum deserunt minima nihil iure tempora ut cupiditate quas odio ea amet. Quam dolore quis quas! Aliquid deserunt nam praesentium ratione soluta ipsum sit nemo illo porro aspernatur error id repellat ad quia consectetur inventore atque quod provident, pariatur esse reprehenderit voluptatum autem nisi ipsam? Numquam autem totam ipsa ipsam praesentium necessitatibus veritatis placeat vero est sed tempore sunt laboriosam atque earum neque voluptatem quasi iste, omnis, dolorum voluptate quaerat? Necessitatibus beatae accusamus ab possimus eaque aperiam esse suscipit natus harum repellendus nemo ullam rerum officia commodi mollitia laudantium, vel recusandae corrupti vero. Nulla, quaerat exercitationem repudiandae repellendus minima nesciunt alias. Tempore quis voluptatibus modi rem qui iusto expedita quia, tempora sit molestiae amet ab inventore. Dolor quae recusandae quidem sint voluptas, tempora consectetur libero delectus doloribus. Blanditiis, itaque. Est earum voluptatibus quos distinctio magni reprehenderit sed dolore pariatur veritatis quisquam, doloremque quasi dignissimos, itaque accusamus dolores corporis suscipit fuga ut, a ipsam modi quaerat laboriosam quis fugiat. Delectus quia debitis voluptates ea deserunt soluta aliquid vel magnam! Itaque, modi aperiam alias facilis animi eligendi cumque. Aperiam cumque quaerat, molestias, in eveniet voluptates nostrum, ullam iusto dignissimos consequatur fugiat nobis doloribus quia distinctio harum totam? Totam architecto nam atque sit repudiandae magni hic nostrum soluta cumque, dolorem similique reiciendis!
            </Typography>
      </Container>
    </Box>
  );
}

export default Footer;