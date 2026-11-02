import Image from 'next/image'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

export default function TitlebarBelowImageList() {
    return (
        <Box
            sx={{
                width: '100%',
                // height: '100dvh',
                overflow: 'hidden',
                p: { xs: 1, sm: 2, md: 3 },
                boxSizing: 'border-box',
            }}
        >
            <ImageList
                cols={6}
                gap={8}
                sx={{
                    width: '100%',
                    height: '100%',
                    m: 0,
                    // overflowY: 'auto',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                }}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={160}
                            height={160}
                            sizes="(max-width: 600px) 33vw, 160px"
                            style={{
                                aspectRatio: '1',
                                objectFit: 'cover',
                                borderRadius: '50%',
                            }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>twitter: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=480&q=75',
        title: 'เคล้าคนึงห์',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=480&q=75',
        title: 'MosaiZ',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=480&q=75',
        title: 'ArsezinaZ',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=480&q=75',
        title: 'MOONETTE',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?auto=format&fit=crop&w=480&q=75',
        title: 'FoxxTrot',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=480&q=75',
        title: 'NithiN',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=480&q=75',
        title: 'AME’REINA',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?auto=format&fit=crop&w=480&q=75',
        title: 'Rabbit go’round',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?auto=format&fit=crop&w=480&q=75',
        title: 'Cortigo.',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&w=480&q=75',
        title: 'Midnight Sun Syndrome',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?auto=format&fit=crop&w=480&q=75',
        title: 'Ophilia Kim',
        author: '@username',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=480&q=75',
        title: 'assistant P.',
        author: '@username',
    },
]
