import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

import { Button } from "~/components/ui/button";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1">
      <h1 className="text-2xl font-semibold">Recent Questions</h1>
      <p className="text-sm text-gray-500">
        Questions that have been asked recently
      </p>
      <div className="mt-4 flex flex-row items-center justify-between">
        <Button>Ask Question</Button>
        <div className="flex flex-row gap-2">
          <Button variant="secondary" className="inline-flex">
            <Filter size={14} />
            <span className="ml-1">Filter</span>
          </Button>
          <Button variant="secondary" className="inline-flex">
            <Filter size={14} />
            <span className="ml-1">Sort</span>
          </Button>
        </div>
      </div>
      <hr className="my-8" />
      <h2 className="text-xl font-medium text-gray-900">Hot Questions</h2>
      <p className="text-sm text-gray-500">
        Questions that have been asked recently and have a lot of views and
        votes
      </p>
      <div className="mt-8 grid grid-cols-3 gap-2">
        {
          // Hot questions
          questions
            .filter((question) => question.hot)
            .map((question) => (
              <div
                key={question.id}
                className="mb-4 rounded-md border border-gray-200 bg-white"
              >
                <div
                  className="relative flex h-12 items-center justify-between
                  rounded-t-md bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                "
                >
                  <Image
                    width={40}
                    height={40}
                    src={question.author.image}
                    alt="profile img"
                    className="absolute bottom-0 left-0 -mb-4 ml-4 h-auto w-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mt-2">
                    <Link href={`/questions/${question.id}`}>
                      <span className="text-lg font-semibold">
                        {question.title}
                      </span>
                    </Link>
                    <p className="text-sm text-gray-500">
                      {question.description}
                    </p>
                  </div>
                  <div className="mt-2">
                    {question.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mr-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
        }
      </div>
      <h2 className="mt-8 text-xl font-medium text-gray-900">All Questions</h2>
      <div className="mt-4">
        {questions.map((question) => (
          <div
            key={question.id}
            className="mb-4 rounded-md border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  width={40}
                  height={40}
                  src={question.author.image}
                  alt="profile img"
                  className="h-auto w-10 rounded-full border-2 border-primary object-cover"
                />
                <div className="ml-2">
                  <p className="text-sm font-semibold">
                    {question.author.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(question.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {new Date(question.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{question.title}</h2>
              <p className="mt-2 text-sm text-gray-500">
                {question.description}
              </p>
            </div>
            <div className="mt-4">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="flex w-80 flex-col gap-4">
      <div className="rounded-md border border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold">News</h2>
        <div className="mt-4">
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <span className="text-sm text-gray-800">
                <span className="font-semibold">John Doe</span> posted a new
                blog post:
              </span>

              <Link href="/">
                <p className="text-sm underline">
                  Test Blog Post Title Goes Here
                </p>
              </Link>
              <span className="mt-1 text-xs text-gray-500">
                2 hours ago - 10 views
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold">Top Tags</h2>
        <div className="mt-4">
          <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            tailwindcss
          </span>
          <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            css
          </span>
          <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            javascript
          </span>
        </div>
      </div>
      <div className="rounded-md border border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold">Top Users</h2>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                width={40}
                height={40}
                src={
                  "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4"
                }
                alt="profile img"
                className="h-auto w-10 rounded-full border-2 border-primary object-cover"
              />
              <div className="ml-2">
                <p className="text-sm font-semibold">{"John Doe"}</p>
                <p className="text-xs text-gray-500">1,000 points</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">1,000 points</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-gray-200 bg-white p-4">
        <h2 className="text-lg font-semibold">Other</h2>
        <div className="mt-4">
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-sm text-gray-500">
              About
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              Github
            </Link>
          </div>

          <hr className="my-2" />
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-sm text-gray-500">
              Terms of Service
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              Contact Us
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              FAQ
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-row gap-6">
      <MainContent />
      <Sidebar />
    </div>
  );
};

export default Home;

const questions = [
  {
    id: 1,
    title: "How to use Next.js?",
    description:
      "I want to use Next.js in my project, but I don't know how to use it.",
    tags: ["nextjs", "react"],
    hot: true,
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4",
    },
    createdAt: "2021-10-10T12:00:00.000Z",
    updatedAt: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 2,
    title: "How to use Tailwind CSS?",
    description:
      "I want to use Tailwind CSS in my project, but I don't know how to use it.",
    tags: ["tailwindcss", "css"],
    hot: true,
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4",
    },
    createdAt: "2021-10-10T12:00:00.000Z",
    updatedAt: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 2,
    title: "How to use Tailwind CSS?",
    description:
      "I want to use Tailwind CSS in my project, but I don't know how to use it.",
    tags: ["tailwindcss", "css"],
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4",
    },
    createdAt: "2021-10-10T12:00:00.000Z",
    updatedAt: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 2,
    title: "How to use Tailwind CSS?",
    description:
      "I want to use Tailwind CSS in my project, but I don't know how to use it.",
    tags: ["tailwindcss", "css"],
    hot: true,
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4",
    },
    createdAt: "2021-10-10T12:00:00.000Z",
    updatedAt: "2021-10-10T12:00:00.000Z",
  },
  {
    id: 2,
    title: "How to use Tailwind CSS?",
    description:
      "I want to use Tailwind CSS in my project, but I don't know how to use it.",
    tags: ["tailwindcss", "css"],
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4",
    },
    createdAt: "2021-10-10T12:00:00.000Z",
    updatedAt: "2021-10-10T12:00:00.000Z",
  },
];
