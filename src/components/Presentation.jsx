import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon, Search2Icon, Icon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, HStack, Heading, Image, ListIcon, ListItem, List, OrderedList, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FcApprove, FcLike, FcButtingIn, FcCellPhone, FcNegativeDynamic, FcSalesPerformance, FcScatterPlot, FcPositiveDynamic, FcApproval, FcElectricalSensor, FcBusinessman, FcComboChart, FcBarChart, FcElectricity, FcElectricalThreshold, FcBullish } from "react-icons/fc";
import Chart from './Chart';
import ReactGA from 'react-ga';
import CookieConsent from "react-cookie-consent";

const GustoPulseLogo = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="100%" stopColor="#9B59B6" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="white" stroke="url(#grad1)" strokeWidth="10"/>
    <path d="M70 60 L70 140 M95 60 L95 140" stroke="url(#grad1)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M120 100 L140 100 L155 70 L170 130 L185 100 L205 100" fill="none" stroke="url(#grad1)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="100" cy="100" r="8" fill="url(#grad1)"/>
  </svg>
);

const Slide = ({ title, children }) => (
  <VStack spacing={8} align="center" justify="center" height="100vh" width="100%" p={8}>
    <Heading as="h2" size="xl" textAlign="center">
      {title}
    </Heading>
    <Box width="100%" maxWidth="1200px" height="calc(100vh - 200px)" overflowY="auto">
      {children}
    </Box>
  </VStack>
);

const slides = [
  {
    title: "EU Non-Alcoholic & Low-Alcohol Beverage Trends",
    content: (
      <VStack spacing={8} align="center" justify="center" height="100%">
        <Box width="200px" height="200px">
          <GustoPulseLogo />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">Market Insights and Future Projections</Text>
        <Text fontSize="xl">Victor Fonseca, CTO</Text>
        <Text fontSize="lg">victor@gustopulse.ai | +49 0176 6121 0436</Text>
      </VStack>
    )
  },
  {
    title: "The Objective",
    content: (
      <VStack spacing={8} align="center" justify="center" height="100%">
      <Box>
        <Flex justifyContent="center" mb={6}>
          <GustoPulseLogo />
        </Flex>
        <Text mb={4}><b>GustoPulse</b> provides deep insights into EU non-alcoholic and low-alcohol beverage categories.</Text>
        <List spacing={2} textAlign={'center'}>
          <ListItem>
          <ListIcon as={FcElectricalThreshold} color='green.500' />
            Leverage our advanced trend-spotting platform
          </ListItem>
          <ListItem>
          <ListIcon as={FcBullish} color='green.500' />
            Analyze market dynamics and consumer preferences
          </ListItem>
          <ListItem>
          <ListIcon as={FcElectricity} color='green.500' />
            Provide actionable insights for beverage brands
          </ListItem>
        </List>
      </Box>
      <Icon as={FcLike}></Icon>
      <Box>
        <Flex justifyContent="center" mb={6} textAlign={'center'}>
          <b>Imagine having your finger on the pulse of what European consumers really want. With GustoPulse, you'll know which flavors are trending, which packaging designs are catching eyes, and which marketing strategies are winning hearts.</b>
        </Flex>
      </Box>
      </VStack>
    )
  },
  {
    title: "The Sobering Consumer",
    content: (
      <VStack spacing={6} align="center" justify="center" height="100%">
        <Image src="/images/nolo-trend.png" alt="NoLo Trend" maxHeight="60%" objectFit="contain" />
        <HStack spacing={8}>
          <Box bg="blue.100" p={4} borderRadius="md">
            <Text fontWeight="bold">Health Trend</Text>
            <Text>Growing consumer interest in healthier choices</Text>
          </Box>
          <Box bg="green.100" p={4} borderRadius="md">
            <Text fontWeight="bold">NoLo Growth</Text>
            <Text>Significant increase in non-alcoholic options</Text>
          </Box>
        </HStack>
      </VStack>
    )
  },
  {
    title: "The Rise of Non-Alcoholic Beverages",
    content: (
      <VStack spacing={6} align="center" justify="center" height="100%">
      <Box>
        <Image src="/images/market-growth.png" alt="Market Growth" width="100%" mb={6} />
        <Text fontWeight="bold" mb={2}>Key Insights:</Text>
        <List spacing={2}>
          <ListItem><ListIcon as={FcBullish}></ListIcon>Non-alcoholic category worth $395 million, growing at 20.6%</ListItem>
          <ListItem><ListIcon as={FcBarChart}></ListIcon>Non-alcoholic beer dominates with 85.3% market share</ListItem>
          <ListItem><ListIcon as={FcComboChart}></ListIcon>Non-alc share of total alcohol reaching 0.47% in 2022</ListItem>
          <ListItem><ListIcon as={FcBusinessman}></ListIcon>82% of non-alc buyers also purchase alcohol-containing products</ListItem>
        </List>
      </Box>
      </VStack>
    )
  },
  {
    title: "NoLo Trend & Highlights",
    content: (
      <VStack spacing={6} align="center" justify="center" height="100%">
      <Box>
        <Text mb={4}>No and Low alcohol (NoLo) beverages are gaining significant traction across the EU.</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
          <Box bg="purple.100" p={4} borderRadius="md">
            <Text fontWeight="bold" mb={2}>Top Categories</Text>
            <OrderedList>
              <ListItem>Non-alcoholic beer</ListItem>
              <ListItem>Low-alcohol wine</ListItem>
              <ListItem>Alcohol-free spirits</ListItem>
            </OrderedList>
          </Box>
          <Box bg="yellow.100" p={4} borderRadius="md">
            <Text fontWeight="bold" mb={2}>Key Demographics</Text>
            <Text>Millennials and Gen Z driving the NoLo trend</Text>
          </Box>
        </Grid>
        <Text>Social media mentions for #NoLo increased by 45% in 2023</Text>
      </Box>
      </VStack>
    )
  },
  {
    title: "Market Growth",
    content: (
      <VStack spacing={6} align="center" justify="center" height="100%">
        <Image src="/images/market-growth.png" alt="Market Growth" maxHeight="70%" objectFit="contain" />
        <Text fontSize="xl" fontWeight="bold">Non-alcoholic beverage market expected to reach $1.7 trillion by 2028</Text>
      </VStack>
    )
  },
  {
    title: "Key Trends",
    content: (
      <VStack spacing={6} align="stretch" width="100%">
        <HStack spacing={4}>
          <Box bg="purple.100" p={4} borderRadius="md" flex={1}>
            <Text fontWeight="bold">Health & Wellness</Text>
            <Text>Increasing focus on sugar-free and functional beverages</Text>
          </Box>
          <Box bg="yellow.100" p={4} borderRadius="md" flex={1}>
            <Text fontWeight="bold">Sustainability</Text>
            <Text>Growing demand for eco-friendly packaging and production</Text>
          </Box>
        </HStack>
        <HStack spacing={4}>
          <Box bg="blue.100" p={4} borderRadius="md" flex={1}>
            <Text fontWeight="bold">Premiumization</Text>
            <Text>Rise of craft and artisanal non-alcoholic options</Text>
          </Box>
          <Box bg="green.100" p={4} borderRadius="md" flex={1}>
            <Text fontWeight="bold">Innovation</Text>
            <Text>New flavors and alcohol-free spirits gaining popularity</Text>
          </Box>
        </HStack>
      </VStack>
    )
  },
  {
    title: "Top 5 Trend Drivers",
    content: (
      <VStack spacing={6} align="stretch" width="100%">
      <Box>
        <List spacing={4}>
          <ListItem>
          <ListIcon as={FcApproval}></ListIcon>
            <Text fontWeight="bold">Health consciousness:</Text>
            <Text>72% cite health as primary reason for choosing NoLo</Text>
          </ListItem>
          <ListItem>
          <ListIcon as={FcElectricalSensor}></ListIcon>
            <Text fontWeight="bold">Taste improvements:</Text>
            <Text>65% say NoLo tastes as good as alcoholic counterparts</Text>
          </ListItem>
          <ListItem>
          <ListIcon as={FcSalesPerformance}></ListIcon>
            <Text fontWeight="bold">Competitive pricing:</Text>
            <Text>Average price gap narrowed to 15% in 2023</Text>
          </ListItem>
          <ListItem>
          <ListIcon as={FcPositiveDynamic}></ListIcon>
            <Text fontWeight="bold">Increased availability:</Text>
            <Text>NoLo options up by 43% in EU supermarkets</Text>
          </ListItem>
          <ListItem>
          <ListIcon as={FcApprove}></ListIcon>
            <Text fontWeight="bold">Social acceptance:</Text>
            <Text>58% feel more comfortable choosing NoLo options socially</Text>
          </ListItem>
        </List>
      </Box>
      </VStack>
    )
  },
  {
    title: "Non-Alcoholic Wine Market Projections",
    content: (
      <VStack spacing={6} align="stretch" width="100%">
      <Box>
        <Chart />
        <Text fontWeight="bold" mt={4}>Key Information:</Text>
        <UnorderedList spacing={2}>
          <ListItem>Market Segments: Still Non-Alcoholic Wine, Sparkling Non-Alcoholic Wine</ListItem>
          <ListItem>Sales Channels: Liquor Stores, Restaurants & Bars, Online Stores, Supermarkets, Tasting Rooms</ListItem>
          <ListItem>Key Players: Ariel Vineyards, Princess Cruises, Noughty, Treasury Wine Estates</ListItem>
        </UnorderedList>
      </Box>
      </VStack>
    )
  },
  {
    title: "Key Competitors",
    content: (
      <VStack spacing={6} align="stretch" width="100%">
      <Box>
        <Text mb={4}>Major Players in the NoLo Market:</Text>
        <UnorderedList spacing={2} columns={2}>
          <ListItem>Heineken 0.0</ListItem>
          <ListItem>Seedlip (Diageo)</ListItem>
          <ListItem>Ceder's (Pernod Ricard)</ListItem>
          <ListItem>Martini 0.0 (Bacardi)</ListItem>
          <ListItem>Lyre's</ListItem>
          <ListItem>CleanCo</ListItem>
          <ListItem>Ritual Zero Proof</ListItem>
        </UnorderedList>
        <Text mt={4}>These companies are investing heavily in product development and marketing to capture the growing NoLo market share.</Text>
      </Box>
      </VStack>
    )
  },
  {
    title: "Total Addressable Market (TAM)",
    content: (
      <VStack spacing={6} align="stretch" width="100%">
      <Box>
        <Box bg="blue.100" p={4} borderRadius="md" mb={4}>
          <Text fontSize="2xl" fontWeight="bold" color="blue.800">€10 Billion by 2025</Text>
          <Text fontSize="md" color="blue.600">Estimated EU NoLo market size</Text>
        </Box>
        <UnorderedList spacing={2}>
          <ListItem>Rapid growth driven by changing consumer preferences</ListItem>
          <ListItem>Increased health consciousness post-pandemic</ListItem>
          <ListItem>Regulatory support for lower alcohol alternatives</ListItem>
          <ListItem>Innovation in production techniques improving taste and variety</ListItem>
        </UnorderedList>
      </Box>
      </VStack>
    )
  },
  {
    title: "Contact Us",
    content: (
      <VStack spacing={8} align="center" justify="center" height="100%">
        <Image src="/images/victor.png" alt="Victor Fonseca" borderRadius="full" boxSize="200px" />
        <Text fontSize="2xl" fontWeight="bold">Victor Fonseca</Text>
        <Text fontSize="xl">CTO, GustoPulse</Text>
        <Text fontSize="lg">victor@gustopulse.ai</Text>
        <Text fontSize="lg">+49 0176 6121 0436</Text>
      </VStack>
    )
  }
];

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gustopulse_cookie_consent');
    if (consent === 'true') {
      setHasConsent(true);
      initializeGA();
    }
  }, []);

  const initializeGA = () => {
    ReactGA.initialize('UA-000000-01'); // Replace with your Google Analytics tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  const handleConsent = () => {
    setHasConsent(true);
    localStorage.setItem('gustopulse_cookie_consent', 'true');
    initializeGA();
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);
    if (hasConsent) {
      ReactGA.event({
        category: 'Presentation',
        action: 'Next Slide',
        label: `Slide ${newSlide + 1}`
      });
    }
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
    if (hasConsent) {
      ReactGA.event({
        category: 'Presentation',
        action: 'Previous Slide',
        label: `Slide ${newSlide + 1}`
      });
    }
  };

  return (
    <Box height="100vh" width="100vw" overflow="hidden" position="relative">
      <Slide title={slides[currentSlide].title}>
        {slides[currentSlide].content}
      </Slide>
      <Flex 
        position="absolute" 
        bottom={4} 
        left={0} 
        right={0} 
        justify="space-between" 
        px={4}
      >
        <Button onClick={prevSlide}>← Previous</Button>
        <Text>Slide {currentSlide + 1} of {slides.length}</Text>
        <Button onClick={nextSlide}>Next →</Button>
      </Flex>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="gustopulse_cookie_consent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={handleConsent}
      >
        This website uses cookies to enhance the user experience. By continuing to use this site, you agree to our use of cookies.{" "}
        <span style={{ fontSize: "10px" }}>
          This site complies with GDPR standards. 
          <a href="/privacy-policy" style={{ color: "white" }}> Learn more</a>
        </span>
      </CookieConsent>
    </Box>
  );
}

export default Presentation;