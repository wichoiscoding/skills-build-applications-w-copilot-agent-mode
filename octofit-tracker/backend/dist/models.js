import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,
    fitnessLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    team: String,
}, { timestamps: true });
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    sport: String,
    members: Number,
    goal: String,
}, { timestamps: true });
const activitySchema = new Schema({
    userName: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    points: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });
const leaderboardSchema = new Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    streak: Number,
    rank: Number,
}, { timestamps: true });
const workoutSchema = new Schema({
    title: { type: String, required: true },
    category: String,
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'easy' },
    durationMinutes: Number,
    description: String,
    equipment: [String],
}, { timestamps: true });
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const LeaderboardEntry = mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
