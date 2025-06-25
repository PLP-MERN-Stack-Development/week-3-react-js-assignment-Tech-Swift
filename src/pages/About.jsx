import { Card, CardContent } from '../components/ui/card';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full bg-gradient-to-br from-blue-100/80 via-purple-100/80 to-pink-100/80 dark:from-blue-900/60 dark:via-purple-900/60 dark:to-pink-900/60 shadow-xl border-0 animate-fade-in">
        <CardContent className="flex flex-col items-center py-10">
          <div className="mb-4 animate-bounce">
            <span className="text-5xl">🚀</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-300 dark:via-purple-300 dark:to-pink-300">About Tech-Swift Task Manager</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 text-center max-w-xl">
            <span className="font-semibold text-blue-600 dark:text-blue-300">Tech-Swift Task Manager</span> is a simple, modern, and <span className="font-semibold text-pink-600 dark:text-pink-300">responsive</span> app built with <span className="font-semibold text-purple-600 dark:text-purple-300">React</span> and <span className="font-semibold text-blue-500 dark:text-blue-200">Tailwind CSS</span>.<br /><br />
            It helps you manage your daily tasks efficiently, with features like <span className="font-semibold text-green-600 dark:text-green-300">add</span>, <span className="font-semibold text-yellow-600 dark:text-yellow-300">complete</span>, <span className="font-semibold text-red-600 dark:text-red-300">delete</span>, and <span className="font-semibold text-indigo-600 dark:text-indigo-300">filter</span>. Enjoy <span className="font-semibold text-gray-900 dark:text-gray-100">light/dark mode</span>, persistent storage, and more!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
