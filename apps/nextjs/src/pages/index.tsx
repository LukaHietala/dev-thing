import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1">
      <h2 className="text-2xl font-semibold text-gray-900">All Questions</h2>
      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
        voluptates, quibusdam, voluptatum, quia voluptate quos dolorum
        voluptatibus quas quibusdam, quia voluptate quos dolorum voluptatibus
        </p>
      <div className="mt-6 flex flex-row items-center justify-between">
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
        <div className="flex flex-row gap-2">
          <Button>Ask Question</Button>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2">
          <Input placeholder="Search..." className="h-8 w-96" />
          <Button variant="outline" className="h-8 px-3">
            Recent
          </Button>
          <Button variant="outline" className="h-8 px-3">
            Popular
          </Button>
          <Button variant="outline" className="h-8 px-3">
            Unanswered
          </Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="h-8 px-3">
            Next
          </Button>
        </div>
      </div>

      <div className="mt-2 divide-y divide-gray-200">
        {questions.map((question) => (
          <div key={question.id} className="flex flex-col py-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  src={question.author.image}
                  alt="profile img"
                  className="h-auto w-10 rounded-full border-2 border-white object-cover"
                />
                <div className="flex flex-col">
                  <Link href={`/questions/${question.id}`}>
                    <span className="text-lg font-semibold">
                      {question.title}
                    </span>
                  </Link>
                  <span className="text-sm text-gray-500">
                    Asked by{" "}
                    <Link href={`/users/${question.author.id}`}>
                      <span className="cursor-pointer underline">
                        {question.author.name}
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="mr-2 text-sm text-gray-500">
                  {question.votes} votes
                </span>
                <span className="mr-2 text-sm text-gray-500">
                  {question.answers.length} answers
                </span>
                <span className="text-sm text-gray-500">
                  {question.views} views
                </span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{question.description}</p>
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
        ))}
      </div>
      {/*pagination buttons*/}
      <div className="mt-4 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="h-8 px-3">
            Prev
          </Button>
          <Button variant="outline" className="h-8 px-3">
            1
          </Button>
          <Button variant="outline" className="h-8 px-3">
            2
          </Button>
          <Button variant="outline" className="h-8 px-3">
            3
          </Button>
          <Button variant="outline" className="h-8 px-3">
            4
          </Button>
          <Button variant="outline" className="h-8 px-3">
            5
          </Button>
          <Button variant="outline" className="h-8 px-3">
            Next
          </Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="h-8 px-3">
            10
          </Button>
          <Button variant="outline" className="h-8 px-3">
            20
          </Button>
          <Button variant="outline" className="h-8 px-3">
            30
          </Button>
          <Button variant="outline" className="h-8 px-3">
            40
          </Button>
          <Button variant="outline" className="h-8 px-3">
            50
          </Button>
        </div>
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
          <div className="flex flex-row gap-2">
            <Link href="/" className="text-sm text-gray-500">
              Javascript
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              React
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              Next.js
            </Link>
            <Link href="/" className="text-sm text-gray-500">
              Tailwind CSS
            </Link>
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
    author: {
      id: 1,
      name: "John Doe",
      image:
        "https://avatars.githubusercontent.com/u/95122845?s=400&u=f4ef37b2c744c6412a0a6a7d2adbeeb407022a74&v=4",
    },
    createdAt: "2021-10-10T12:00:00.000Z",
    updatedAt: "2021-10-10T12:00:00.000Z",
    votes: 10,
    answers: [
      {
        id: 1,
        content: "You can use Next.js by following the documentation.",
      },
    ],
    views: 100,
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
    votes: 10,
    answers: [
      {
        id: 1,
        content: "You can use Next.js by following the documentation.",
      },
    ],
    views: 100,
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
    votes: 10,
    answers: [
      {
        id: 1,
        content: "You can use Next.js by following the documentation.",
      },
    ],
    views: 100,
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
    votes: 10,
    answers: [
      {
        id: 1,
        content: "You can use Next.js by following the documentation.",
      },
    ],
    views: 100,
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
    votes: 10,
    answers: [
      {
        id: 1,
        content: "You can use Next.js by following the documentation.",
      },
    ],
    views: 100,
  },
];
