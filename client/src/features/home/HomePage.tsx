import { Box, Typography } from "@mui/material";
//import Slider from "react-slick";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Box display='flex' justifyContent='center' sx={{p: 4}} >
                <Typography variant='h1'>Welcome to the store</Typography>
            </Box>
        </>
    )
}