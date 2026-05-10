import type { Social, Skill, Project, Friend } from './types'

export const userId = '1120045713867423835'
export const fallbackUrl = 'https://naibuu.dev/assets/fallback.png'

export const metadata: { title: string; description: string } = {
    title: 'Naibuu',
    description:
        "Heya! I'm Alex, also known as Naibuu. I'm a software developer and graphic designer from Greece, with experience in both web and software development. I also bring strong expertise in graphic design with a refined eye for detail and aesthetics.",
}

export const information: {
    icon: string
    text: string
}[] = [
    {
        icon: 'ph:map-pin',
        text: 'Lamia, Greece',
    },
    {
        icon: 'ph:user',
        text: 'He/Him',
    },
    {
        icon: 'ph:graduation-cap',
        text: 'Self-taught',
    },
]

export const socials: Social[] = [
    {
        text: 'Discord',
        url: 'https://s.naibuu.dev/discord',
        icon: 'ph:discord-logo',
    },
    {
        text: 'Behance',
        url: 'https://s.naibuu.dev/behance',
        icon: 'ph:behance-logo',
    },
    {
        text: 'Github',
        url: 'https://s.naibuu.dev/github',
        icon: 'ph:github-logo',
    },
    {
        text: 'X (Twitter)',
        url: 'https://s.naibuu.dev/twitter',
        icon: 'ph:x-logo',
    },
    {
        text: 'Email',
        url: 'mailto:me@naibuu.dev',
        icon: 'ph:envelope',
    },
]

export const skills: Skill[] = [
    {
        text: 'Software development',
        description: 'Visual Studio, Visual Studio Code and IntelliJ',
        progress: 75,
    },
    {
        text: 'Graphic design',
        description: 'Adobe Suite and Figma',
        progress: 90,
    },
    {
        text: 'Web development',
        description: 'SSR Frameworks, React, Svelte, Vue and Astro',
        progress: 85,
    },
]

export const projects: Project[] = [
    {
        icon: '/assets/icons/cheatbreaker.png',
        role: 'Software Engineer',
        start: 2023,
        title: 'CheatBreaker',
        description:
            'CheatBreaker is a free FPS-boosting modpack for Minecraft.',
        tasks: [
            'Contributed to the development and design efforts for a new launcher.',
        ],
        url: 'https://cheatbreaker.net',
    },
    {
        icon: '/assets/icons/rend.png',
        role: 'Software Engineer',
        start: 2025,
        end: 2026,
        title: 'Rend',
        description:
            'Rend is a game distribution platform that enables players to easily discover and enjoy a diverse selection of games.',
        tasks: [
            'Assisted in managing the community and contributing to strategic decisions.',
            'Led the design efforts for the project.',
            'Contributed to the development of internal tools to streamline workflows.',
        ],
        url: 'https://rend.sh',
    },
    {
        icon: '/assets/icons/hybris.png',
        role: 'Administrator',
        start: 2023,
        end: 2024,
        title: 'Hybris',
        description:
            'Hybris is a Minecraft modpack designed to enhance the gameplay experience and introduce a flexible modding framework for developers.',
        tasks: [
            'Assisted in managing the community and contributing to strategic decisions.',
            'Led the design efforts for both the client and the launcher.',
            'Helped develop internal tools to streamline development.',
        ],
        url: 'https://github.com/hybrismc',
    },
]

export const friends: Friend[] = [
    {
        icon: 'https://www.thororen.com/assets/profile',
        text: 'thororen',
        url: 'https://www.thororen.com',
    },
]
