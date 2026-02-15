import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';

interface Video {
    id: string;
    title: string;
    description?: string;
}

// Adicione seus vídeos aqui - use o ID do YouTube (parte após v= na URL)
const videos: Video[] = [
    {
        id: 'SEU_VIDEO_ID_1',
        title: 'Título do Vídeo 1',
        description: 'Descrição breve do conteúdo'
    },
    {
        id: 'SEU_VIDEO_ID_2',
        title: 'Título do Vídeo 2',
        description: 'Descrição breve do conteúdo'
    }
];

export const YoutubeContent: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='custom-divider'></div>
            <div className='youtube-section'>
                <h2 className='titleStyle' style={{ color: '#FFFFFF' }}>
                    <FaYoutube size={35} style={{ marginRight: '10px', color: '#FF0000' }} />
                    {t('youtube.title')}
                </h2>

                <div className='youtube-grid'>
                    {videos.map((video) => (
                        <div key={video.id} className='youtube-card'>
                            <div className='youtube-embed'>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className='youtube-info'>
                                <h4 className='textStyleGeneral'>{video.title}</h4>
                                {video.description && (
                                    <p className='textStyleGeneral fw-lighter'>{video.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
