import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import datasets
import { teachers, students, parents } from '../src/data/users';
import { chatThreads } from '../src/data/messages';
import { attendanceRecords } from '../src/data/attendance';
import { fees } from '../src/data/fees';
import { announcements } from '../src/data/announcements';
import { blogPosts } from '../src/data/blog';
import { subjects, classes, scheduleGrade10A, scheduleGrade10B } from '../src/data/classes';
import { assignments, grades } from '../src/data/grades';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {
  teachers,
  students,
  parents,
  chatThreads,
  attendanceRecords,
  fees,
  announcements,
  blogPosts,
  subjects,
  classes,
  scheduleGrade10A,
  scheduleGrade10B,
  assignments,
  grades,
};

const outputPath = path.resolve(__dirname, '../db.json');

try {
  fs.writeFileSync(outputPath, JSON.stringify(db, null, 2), 'utf-8');
  console.log(`Successfully generated db.json with ${Object.keys(db).length} collections at: ${outputPath}`);
} catch (error) {
  console.error('Failed to generate db.json:', error);
  process.exit(1);
}
