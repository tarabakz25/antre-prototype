import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../../components/Card';
import { Button } from '../../components/Button';
import { mockTemplates } from '../../data/mockData';

export default function TemplatesPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '初級';
      case 'intermediate':
        return '中級';
      case 'advanced':
        return '上級';
      default:
        return difficulty;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          テンプレート倉庫
        </h1>
        <p className="text-lg text-gray-600">
          すぐに開発を始められるOSSテンプレート集。
          各テンプレートにはベストプラクティスが組み込まれています。
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="sm">すべて</Button>
          <Button variant="ghost" size="sm">フロントエンド</Button>
          <Button variant="ghost" size="sm">バックエンド</Button>
          <Button variant="ghost" size="sm">モバイル</Button>
          <Button variant="ghost" size="sm">フルスタック</Button>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTemplates.map((template) => (
          <Card key={template.id} hover>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {template.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    template.difficulty
                  )}`}
                >
                  {getDifficultyLabel(template.difficulty)}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {template.description}
              </p>
            </CardHeader>
            <CardContent>
              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {template.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <span>⭐ {template.stars}</span>
                  <span>🍴 {template.forks}</span>
                </div>
                <span>更新: {template.lastUpdated}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={template.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="primary" size="sm" className="w-full">
                    GitHubで見る
                  </Button>
                </a>
                <Button variant="outline" size="sm">
                  Use Template
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Getting Started Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          テンプレートの使い方
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">テンプレート選択</h3>
            <p className="text-sm text-gray-600">
              プロジェクトに適したテンプレートを選択
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">リポジトリ作成</h3>
            <p className="text-sm text-gray-600">
              「Use Template」でリポジトリを作成
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">開発開始</h3>
            <p className="text-sm text-gray-600">
              すぐに開発を始められます
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
