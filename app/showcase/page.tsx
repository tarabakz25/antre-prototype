'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../../components/Card';
import { Button } from '../../components/Button';
import { mockProjects } from '../../data/mockData';

export default function ShowcasePage() {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  const allTags = ['all', ...Array.from(new Set(mockProjects.flatMap(p => p.tags)))];

  const filteredProjects = selectedTag === 'all' 
    ? mockProjects 
    : mockProjects.filter(project => project.tags.includes(selectedTag));

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'stars':
        return b.stars - a.stars;
      case 'mau':
        return b.mau - a.mau;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          プロジェクトショーケース
        </h1>
        <p className="text-lg text-gray-600">
          学生が開発・公開したプロダクトの一覧です。
          あなたのプロジェクトもここに掲載されます。
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="mb-8 space-y-4">
        {/* Tags Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">カテゴリで絞り込み</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                {tag === 'all' ? 'すべて' : tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">並び順:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">新しい順</option>
            <option value="stars">スター数順</option>
            <option value="mau">MAU順</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <Card key={project.id} hover>
            <CardHeader>
              {/* Project Thumbnail */}
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">📱</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">
                    {project.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {project.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(project.createdAt)}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <span>⭐ {project.stars}</span>
                  <span>👥 {project.mau.toLocaleString()} MAU</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" size="sm" className="w-full">
                      デモを見る
                    </Button>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.liveUrl ? '' : 'flex-1'}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={project.liveUrl ? '' : 'w-full'}
                  >
                    GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submit Project CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          あなたのプロジェクトも掲載しませんか？
        </h2>
        <p className="text-gray-600 mb-6">
          開発したプロダクトをショーケースに掲載して、多くの人に見てもらいましょう。
        </p>
        <Button size="lg">
          プロジェクトを投稿する
        </Button>
      </div>
    </div>
  );
}
