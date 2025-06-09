import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../components/Card';
import { Button } from '../components/Button';
import { mockKPIData, mockCloudCredits } from '../data/mockData';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          学生主導パブリッシュ支援サービス
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          学生が自分の力で実装・テスト・デプロイ・運用を完遂し、世界に公開できるよう
          <br />
          最小限のレール（ツール・ホスティング・メンタリング）を提供します
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/templates">
            <Button size="lg">テンプレートを見る</Button>
          </Link>
          <Link href="/mentors">
            <Button variant="outline" size="lg">メンターに相談</Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {mockKPIData.totalProjects}
            </div>
            <div className="text-sm text-gray-600">公開プロジェクト</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {mockKPIData.totalStudents}
            </div>
            <div className="text-sm text-gray-600">参加学生</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {mockKPIData.mentorSessions}
            </div>
            <div className="text-sm text-gray-600">メンターセッション</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              +{mockKPIData.monthlyGrowth}%
            </div>
            <div className="text-sm text-gray-600">月間成長率</div>
          </CardContent>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card hover>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              🚀 テンプレート倉庫
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Next.js、SvelteKit、FastAPIなどのOSSテンプレートを提供。
              すぐに開発を始められます。
            </p>
            <Link href="/templates">
              <Button variant="outline" size="sm">詳細を見る</Button>
            </Link>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              👨‍🏫 メンター支援
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              経験豊富なエンジニアによる30分単位のメンタリング。
              技術・ビジネス・デザインの相談が可能。
            </p>
            <Link href="/mentors">
              <Button variant="outline" size="sm">メンターを探す</Button>
            </Link>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              ☁️ クラウドクレジット
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Vercel、Supabase、Firebaseなどの教育ディスカウント情報を一元管理。
            </p>
            <div className="text-sm text-green-600 font-medium">
              利用可能: ${mockCloudCredits.reduce((sum, credit) => sum + credit.amount, 0)} 相当
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          今すぐ始めよう
        </h2>
        <p className="text-gray-600 mb-6">
          あなたのアイデアを世界に公開する第一歩を踏み出しませんか？
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/showcase">
            <Button>ショーケースを見る</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">KPIダッシュボード</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
