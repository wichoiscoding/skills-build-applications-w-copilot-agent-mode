import { connectToDatabase } from '../db.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models.js';
async function seedDatabase() {
    console.log('Seed the octofit_db database with test data');
    await connectToDatabase();
    await Promise.all([
        User.deleteMany({}),
        Team.deleteMany({}),
        Activity.deleteMany({}),
        LeaderboardEntry.deleteMany({}),
        Workout.deleteMany({}),
    ]);
    const users = await User.insertMany([
        {
            name: 'Ava Martinez',
            email: 'ava@example.com',
            age: 16,
            fitnessLevel: 'advanced',
            team: 'Trail Blazers',
        },
        {
            name: 'Noah Brooks',
            email: 'noah@example.com',
            age: 15,
            fitnessLevel: 'intermediate',
            team: 'Peak Performers',
        },
        {
            name: 'Mina Patel',
            email: 'mina@example.com',
            age: 17,
            fitnessLevel: 'beginner',
            team: 'Trail Blazers',
        },
    ]);
    const teams = await Team.insertMany([
        {
            name: 'Trail Blazers',
            sport: 'Cross Country',
            members: 12,
            goal: 'Complete 3 group runs each week',
        },
        {
            name: 'Peak Performers',
            sport: 'Fitness Challenge',
            members: 10,
            goal: 'Log 1000 total activity points',
        },
    ]);
    await Activity.insertMany([
        {
            userName: users[0].name,
            type: 'run',
            durationMinutes: 35,
            points: 140,
            date: new Date('2026-06-25T07:15:00.000Z'),
        },
        {
            userName: users[1].name,
            type: 'strength',
            durationMinutes: 45,
            points: 160,
            date: new Date('2026-06-24T17:00:00.000Z'),
        },
        {
            userName: users[2].name,
            type: 'walk',
            durationMinutes: 25,
            points: 70,
            date: new Date('2026-06-23T18:30:00.000Z'),
        },
    ]);
    await LeaderboardEntry.insertMany([
        { name: users[0].name, points: 980, streak: 7, rank: 1 },
        { name: users[1].name, points: 915, streak: 5, rank: 2 },
        { name: users[2].name, points: 840, streak: 3, rank: 3 },
    ]);
    await Workout.insertMany([
        {
            title: 'Morning Jog Circuit',
            category: 'cardio',
            difficulty: 'easy',
            durationMinutes: 25,
            description: 'A brisk jog with active stretches.',
            equipment: ['running shoes'],
        },
        {
            title: 'Core Strength Blast',
            category: 'strength',
            difficulty: 'medium',
            durationMinutes: 30,
            description: 'Bodyweight strength work for the core and legs.',
            equipment: ['mat'],
        },
        {
            title: 'Team Relay Challenge',
            category: 'team',
            difficulty: 'hard',
            durationMinutes: 40,
            description: 'A relay-style workout for teamwork and endurance.',
            equipment: ['cones', 'timer'],
        },
    ]);
    console.log(`Seeded ${users.length} users, ${teams.length} teams, activities, leaderboard entries, and workouts.`);
}
seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error('Seed failed', error);
    process.exit(1);
});
