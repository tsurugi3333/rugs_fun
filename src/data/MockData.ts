import { LeaderboardEntry, User, UserRole, UserBadge } from '../types/user';
import { ChatMessage } from '../types/chat';

// Mock multipliers for charts
export const mockMultipliers = [
  { value: 5.58, label: '5.58x' },
  { value: 1.24, label: '1.24x' }, 
  { value: 2.23, label: '2.23x' },
  { value: 1.33, label: '1.33x' },
  { value: 1.63, label: '1.63x' },
  { value: 4.29, label: '4.29x' },
  { value: 30.17, label: '30.17x' },
  { value: 2.15, label: '2.15x' },
  { value: 3.19, label: '3.19x' },
  { value: 1.23, label: '1.23x' },
];

// Mock leaderboard data
export const mockLeaderboardEntries: LeaderboardEntry[] = [
  { 
    user: { 
      username: 'GKK', 
      level: 5, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 16.787 
  },
  { 
    user: { 
      username: 'omg3lol', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'gold'
    }, 
    profit: 16.011 
  },
  { 
    user: { 
      username: 'ST021', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'silver'
    }, 
    profit: 15.702 
  },
  { 
    user: { 
      username: 'jdjahjdjakhsdjkh', 
      level: 2, 
      role: 'user', 
      avatar: '👤',
      badge: 'bronze'
    }, 
    profit: 15.206 
  },
  { 
    user: { 
      username: 'moon', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'user'
    }, 
    profit: 15.084 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 1, 
      role: 'user',
      avatar: '👤'
    }, 
    profit: 14.286 
  },
  { 
    user: { 
      username: 'Soroi2', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 13.606 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 2, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 12.563 
  },
  { 
    user: { 
      username: '42reth', 
      level: 1, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 10.959 
  },
  { 
    user: { 
      username: 'GKK', 
      level: 5, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 16.787 
  },
  { 
    user: { 
      username: 'omg3lol', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'gold'
    }, 
    profit: 16.011 
  },
  { 
    user: { 
      username: 'ST021', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'silver'
    }, 
    profit: 15.702 
  },
  { 
    user: { 
      username: 'jdjahjdjakhsdjkh', 
      level: 2, 
      role: 'user', 
      avatar: '👤',
      badge: 'bronze'
    }, 
    profit: 15.206 
  },
  { 
    user: { 
      username: 'moon', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'user'
    }, 
    profit: 15.084 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 1, 
      role: 'user',
      avatar: '👤'
    }, 
    profit: 14.286 
  },
  { 
    user: { 
      username: 'Soroi2', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 13.606 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 2, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 12.563 
  },
  { 
    user: { 
      username: '42reth', 
      level: 1, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 10.959 
  },
  { 
    user: { 
      username: 'GKK', 
      level: 5, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 16.787 
  },
  { 
    user: { 
      username: 'omg3lol', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'gold'
    }, 
    profit: 16.011 
  },
  { 
    user: { 
      username: 'ST021', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'silver'
    }, 
    profit: 15.702 
  },
  { 
    user: { 
      username: 'jdjahjdjakhsdjkh', 
      level: 2, 
      role: 'user', 
      avatar: '👤',
      badge: 'bronze'
    }, 
    profit: 15.206 
  },
  { 
    user: { 
      username: 'moon', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'user'
    }, 
    profit: 15.084 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 1, 
      role: 'user',
      avatar: '👤'
    }, 
    profit: 14.286 
  },
  { 
    user: { 
      username: 'Soroi2', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 13.606 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 2, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 12.563 
  },
  { 
    user: { 
      username: '42reth', 
      level: 1, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 10.959 
  },
  { 
    user: { 
      username: 'GKK', 
      level: 5, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 16.787 
  },
  { 
    user: { 
      username: 'omg3lol', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'gold'
    }, 
    profit: 16.011 
  },
  { 
    user: { 
      username: 'ST021', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'silver'
    }, 
    profit: 15.702 
  },
  { 
    user: { 
      username: 'jdjahjdjakhsdjkh', 
      level: 2, 
      role: 'user', 
      avatar: '👤',
      badge: 'bronze'
    }, 
    profit: 15.206 
  },
  { 
    user: { 
      username: 'moon', 
      level: 3, 
      role: 'user',
      avatar: '👤',
      badge: 'user'
    }, 
    profit: 15.084 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 1, 
      role: 'user',
      avatar: '👤'
    }, 
    profit: 14.286 
  },
  { 
    user: { 
      username: 'Soroi2', 
      level: 4, 
      role: 'user', 
      avatar: '👤',
      badge: 'verified'
    }, 
    profit: 13.606 
  },
  { 
    user: { 
      username: 'Anon', 
      level: 2, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 12.563 
  },
  { 
    user: { 
      username: '42reth', 
      level: 1, 
      role: 'user', 
      avatar: '👤'
    }, 
    profit: 10.959 
  }
];

// Helper function to create mock users
export const createMockUser = (
  id: string,
  username: string,
  avatar: string,
  level: number,
  badge: UserBadge,
  role: UserRole = 'user'
): User => ({
  id,
  username,
  email: `${username.toLowerCase()}@example.com`,
  avatar,
  level,
  experience: level * 100,
  balance: level * 1000,
  tier: level > 1 ? 2 : 1,
  badge,
  role,
  joinedAt: `2023-01-0${level < 10 ? level : 9}`
});

// Mock chat messages
export const mockChatMessages: ChatMessage[] = [
  { 
    id: '1',
    user: createMockUser('1', 'Ashu', '👤', 1, 'verified'),
    text: 'like im curious when does like $000x happens every 100?', 
    timestamp: '2023-05-11T12:05:00Z', 
    isVerified: true 
  },
  { 
    id: '2',
    user: createMockUser('2', 'HereZwin', '👑', 2, 'gold'),
    text: 'Rug city from here', 
    timestamp: '2023-05-11T12:06:00Z', 
    isVerified: false 
  },
  { 
    id: '3',
    user: createMockUser('3', 'Blessa', '👤', 1, 'verified'),
    text: 'there no rhyme or reason to it Ashu', 
    timestamp: '2023-05-11T12:07:00Z', 
    isVerified: true 
  },
  { 
    id: '4',
    user: createMockUser('4', 'Vmoney', '👑', 2, 'gold'),
    text: 'more like 700 games', 
    timestamp: '2023-05-11T12:08:00Z', 
    isVerified: false 
  },
  {
    id: '5',
    user: createMockUser('5', 'rarest', '👤', 1, 'user'),
    text: 'no ashu it\'s random', 
    timestamp: '2023-05-11T12:09:00Z', 
    isVerified: false 
  },
  { 
    id: '6',
    user: createMockUser('6', 'rarest', '👤', 1, 'user'),
    text: 'it can happen three times in a row or it can happen once in a week', 
    timestamp: '2023-05-11T12:10:00Z', 
    isVerified: false 
  },
  { 
    id: '7',
    user: createMockUser('7', 'starlight', '🌟', 2, 'user'),
    text: 'it happens every day at the same time like clockwork', 
    timestamp: '2023-05-11T12:25:00Z', 
    isVerified: true 
  },
  { 
    id: '8',
    user: createMockUser('8', 'bluesky', '☁️', 2, 'user'),
    text: 'it can be frustrating when it occurs during important meetings', 
    timestamp: '2023-05-11T12:40:30Z', 
    isVerified: false 
  },
  { 
    id: '9',
    user: createMockUser('9', 'nightowl', '🦉', 4, 'user'),
    text: 'it never seems to happen when I actually have time to deal with it', 
    timestamp: '2023-05-11T13:05:45Z', 
    isVerified: true 
  },
  { 
    id: '10',
    user: createMockUser('10', 'sunshine', '☀️', 1, 'user'),
    text: 'it might be related to the system updates from last week', 
    timestamp: '2023-05-11T13:22:10Z', 
    isVerified: false 
  },
  { 
    id: '11',
    user: createMockUser('11', 'techgeek', '🤖', 5, 'user'),
    text: 'it only happens when multiple applications are running simultaneously', 
    timestamp: '2023-05-11T13:45:20Z', 
    isVerified: true 
  },
  { 
    id: '12',
    user: createMockUser('12', 'mountaineer', '⛰️', 3, 'user'),
    text: 'it seems to be getting more frequent as the day goes on', 
    timestamp: '2023-05-11T14:10:15Z', 
    isVerified: false 
  },
  { 
    id: '13',
    user: createMockUser('13', 'oceantide', '🌊', 2, 'user'),
    text: 'it could be fixed with a simple restart but nobody tries that first', 
    timestamp: '2023-05-11T14:35:22Z', 
    isVerified: true 
  },
  { 
    id: '14',
    user: createMockUser('14', 'stargaze', '✨', 4, 'user'),
    text: 'it was supposed to be resolved in the latest patch', 
    timestamp: '2023-05-11T15:00:40Z', 
    isVerified: false 
  },
  { 
    id: '15',
    user: createMockUser('15', 'raindrops', '💧', 1, 'user'),
    text: 'it happens randomly with no clear pattern that I can detect', 
    timestamp: '2023-05-11T15:25:05Z', 
    isVerified: true 
  },
  { 
    id: '16',
    user: createMockUser('16', 'firestorm', '🔥', 3, 'user'),
    text: 'it never occurred before the system migration last month', 
    timestamp: '2023-05-11T15:50:30Z', 
    isVerified: false 
  },
  { 
    id: '17',
    user: createMockUser('17', 'cloudnine', '☁️', 5, 'user'),
    text: 'it might be worth logging the exact times when it happens', 
    timestamp: '2023-05-11T16:15:55Z', 
    isVerified: true 
  },
  { 
    id: '18',
    user: createMockUser('18', 'moonbeam', '🌙', 2, 'user'),
    text: 'it tends to resolve itself after about twenty minutes each time', 
    timestamp: '2023-05-11T16:40:10Z', 
    isVerified: false 
  },
  { 
    id: '19',
    user: createMockUser('19', 'sunflower', '🌻', 4, 'user'),
    text: 'it usually happens right after lunch for some strange reason', 
    timestamp: '2023-05-11T17:05:25Z', 
    isVerified: true 
  },
  { 
    id: '20',
    user: createMockUser('20', 'thunderbolt', '⚡', 3, 'user'),
    text: 'it could be affecting multiple departments not just ours', 
    timestamp: '2023-05-11T17:30:40Z', 
    isVerified: false 
  },
  { 
    id: '21',
    user: createMockUser('21', 'snowflake', '❄️', 1, 'user'),
    text: 'it seems to happen more when the network is under heavy load', 
    timestamp: '2023-05-11T17:55:55Z', 
    isVerified: true 
  },
  { 
    id: '22',
    user: createMockUser('22', 'leafgreen', '🍃', 4, 'user'),
    text: 'it was mentioned in the last team meeting but no solution yet', 
    timestamp: '2023-05-11T18:20:15Z', 
    isVerified: false 
  },
  { 
    id: '23',
    user: createMockUser('23', 'skyblue', '🔷', 2, 'user'),
    text: 'it never affects the backup systems only the main servers', 
    timestamp: '2023-05-11T18:45:30Z', 
    isVerified: true 
  },
  { 
    id: '24',
    user: createMockUser('24', 'rosepetal', '🌹', 5, 'user'),
    text: 'it might be worth reporting to the IT support team finally', 
    timestamp: '2023-05-11T19:10:45Z', 
    isVerified: false 
  },
  { 
    id: '25',
    user: createMockUser('25', 'sandcastle', '🏝️', 3, 'user'),
    text: 'it happens at the worst possible moments every single time', 
    timestamp: '2023-05-11T19:35:00Z', 
    isVerified: true 
  },
  { 
    id: '26',
    user: createMockUser('26', 'icecream', '🍦', 1, 'user'),
    text: 'it could be related to the recent server temperature issues', 
    timestamp: '2023-05-11T20:00:15Z', 
    isVerified: false 
  },
  { 
    id: '27',
    user: createMockUser('27', 'galaxy', '🌌', 4, 'user'),
    text: 'it stops immediately if you switch to the backup connection', 
    timestamp: '2023-05-11T20:25:30Z', 
    isVerified: true 
  },
  { 
    id: '28',
    user: createMockUser('28', 'volcano', '🌋', 2, 'user'),
    text: 'it should be documented for the next system audit', 
    timestamp: '2023-05-11T20:50:45Z', 
    isVerified: false 
  },
  { 
    id: '29',
    user: createMockUser('29', 'rainbow', '🌈', 3, 'user'),
    text: 'it happens to me twice daily but others report it more often', 
    timestamp: '2023-05-11T21:15:00Z', 
    isVerified: true 
  },
  { 
    id: '30',
    user: createMockUser('30', 'tornado', '🌪️', 5, 'user'),
    text: 'it causes delays in processing that affect the entire workflow', 
    timestamp: '2023-05-11T21:40:15Z', 
    isVerified: false 
  },
  { 
    id: '31',
    user: createMockUser('31', 'comet', '☄️', 2, 'user'),
    text: 'it was supposed to be addressed in the quarterly maintenance', 
    timestamp: '2023-05-11T22:05:30Z', 
    isVerified: true 
  },
  { 
    id: '32',
    user: createMockUser('32', 'riverflow', '🏞️', 4, 'user'),
    text: 'it needs to be escalated to senior management soon', 
    timestamp: '2023-05-11T22:30:45Z', 
    isVerified: false 
  },
  { 
    id: '33',
    user: createMockUser('33', 'butterfly', '🦋', 1, 'user'),
    text: 'it happens less frequently on the updated systems', 
    timestamp: '2023-05-11T22:55:00Z', 
    isVerified: true 
  },
  { 
    id: '34',
    user: createMockUser('34', 'diamond', '💎', 3, 'user'),
    text: 'it might have something to do with the recent database migration', 
    timestamp: '2023-05-11T23:20:15Z', 
    isVerified: false 
  },
  { 
    id: '35',
    user: createMockUser('35', 'emerald', '🟢', 5, 'user'),
    text: 'it occurs right after saving large files to the shared drive', 
    timestamp: '2023-05-11T23:45:30Z', 
    isVerified: true 
  },
  { 
    id: '36',
    user: createMockUser('36', 'sapphire', '🔵', 2, 'user'),
    text: 'it was mentioned in the release notes as a known issue', 
    timestamp: '2023-05-12T00:10:45Z', 
    isVerified: false 
  },
  { 
    id: '37',
    user: createMockUser('37', 'ruby', '❤️', 4, 'user'),
    text: 'it happens during peak usage hours without fail', 
    timestamp: '2023-05-12T00:35:00Z', 
    isVerified: true 
  },
  { 
    id: '38',
    user: createMockUser('38', 'pearl', '🤍', 1, 'user'),
    text: 'it seems to be triggered by specific user actions not random', 
    timestamp: '2023-05-12T01:00:15Z', 
    isVerified: false 
  },
  { 
    id: '39',
    user: createMockUser('39', 'amber', '🟠', 3, 'user'),
    text: 'it has been documented in at least three different incident reports', 
    timestamp: '2023-05-12T01:25:30Z', 
    isVerified: true 
  },
  { 
    id: '40',
    user: createMockUser('40', 'topaz', '🟡', 5, 'user'),
    text: 'it only affects users with administrative privileges strangely enough', 
    timestamp: '2023-05-12T01:50:45Z', 
    isVerified: false 
  },
  { 
    id: '41',
    user: createMockUser('41', 'onyx', '⚫', 2, 'user'),
    text: 'it happens more frequently during system backups', 
    timestamp: '2023-05-12T02:15:00Z', 
    isVerified: true 
  },
  { 
    id: '42',
    user: createMockUser('42', 'silver', '⚪', 4, 'user'),
    text: 'it might be worth checking the server logs for clues', 
    timestamp: '2023-05-12T02:40:15Z', 
    isVerified: false 
  },
  { 
    id: '43',
    user: createMockUser('43', 'bronze', '🟤', 1, 'user'),
    text: 'it happens regardless of which browser or client is being used', 
    timestamp: '2023-05-12T03:05:30Z', 
    isVerified: true 
  },
  { 
    id: '44',
    user: createMockUser('44', 'platinum', '⭐', 3, 'user'),
    text: 'it could be affecting our response times for customer queries', 
    timestamp: '2023-05-12T03:30:45Z', 
    isVerified: false 
  },
  { 
    id: '45',
    user: createMockUser('45', 'titanium', '🔘', 5, 'user'),
    text: 'it seems to happen more on Mondays than any other day', 
    timestamp: '2023-05-12T03:55:00Z', 
    isVerified: true 
  },
  { 
    id: '46',
    user: createMockUser('46', 'copper', '🟠', 2, 'user'),
    text: 'it was discussed at length during the last team standup', 
    timestamp: '2023-05-12T04:20:15Z', 
    isVerified: false 
  },
  { 
    id: '47',
    user: createMockUser('47', 'brass', '🟡', 4, 'user'),
    text: 'it happens more often when multiple reports are generated simultaneously', 
    timestamp: '2023-05-12T04:45:30Z', 
    isVerified: true 
  },
  { 
    id: '48',
    user: createMockUser('48', 'iron', '⚙️', 1, 'user'),
    text: 'it might be related to the cache clearing schedule', 
    timestamp: '2023-05-12T05:10:45Z', 
    isVerified: false 
  },
  { 
    id: '49',
    user: createMockUser('49', 'steel', '🔧', 3, 'user'),
    text: 'it occurs less when the system load is balanced properly', 
    timestamp: '2023-05-12T05:35:00Z', 
    isVerified: true 
  },
  { 
    id: '50',
    user: createMockUser('50', 'chrome', '🔍', 5, 'user'),
    text: 'it usually stops if you clear the application cache and restart', 
    timestamp: '2023-05-12T06:00:15Z', 
    isVerified: false 
  },
  { 
    id: '51',
    user: createMockUser('51', 'nickel', '🪙', 2, 'user'),
    text: 'it was highlighted as a priority issue in the quarterly review', 
    timestamp: '2023-05-12T06:25:30Z', 
    isVerified: true 
  },
  { 
    id: '52',
    user: createMockUser('52', 'cobalt', '🔹', 4, 'user'),
    text: 'it happens consistently after exactly one hour of system uptime', 
    timestamp: '2023-05-12T06:50:45Z', 
    isVerified: false 
  },
  { 
    id: '53',
    user: createMockUser('53', 'zinc', '⬜', 1, 'user'),
    text: 'it could be worth implementing a temporary workaround', 
    timestamp: '2023-05-12T07:15:00Z', 
    isVerified: true 
  },
  { 
    id: '54',
    user: createMockUser('54', 'mercury', '🌡️', 3, 'user'),
    text: 'it happens most frequently during data synchronization', 
    timestamp: '2023-05-12T07:40:15Z', 
    isVerified: false 
  },
  { 
    id: '55',
    user: createMockUser('55', 'silicon', '💻', 5, 'user'),
    text: 'it might be caused by a memory leak in the latest update', 
    timestamp: '2023-05-12T08:05:30Z', 
    isVerified: true 
  },
  { 
    id: '56',
    user: createMockUser('56', 'carbon', '⚫', 2, 'user'),
    text: 'it happens simultaneously across multiple servers at once', 
    timestamp: '2023-05-12T08:30:45Z', 
    isVerified: false 
  },
  { 
    id: '57',
    user: createMockUser('57', 'neon', '💫', 4, 'user'),
    text: 'it should be addressed before the next major deployment', 
    timestamp: '2023-05-12T08:55:00Z', 
    isVerified: true 
  }
];