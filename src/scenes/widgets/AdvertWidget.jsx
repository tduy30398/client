import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src={`http://localhost:3001/assets/info${randomNumber}.jpeg`}
                style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
            />
            <FlexBetween>
                <Typography color={main}>MikaCosmetics</Typography>
                <Typography color={medium}>mikacosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Our new product is designed to enhance your natural features and leave you feeling
                confident and radiant. Our formula is made with high-quality ingredients that
                nourish and protect your skin, while delivering a flawless finish.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;
