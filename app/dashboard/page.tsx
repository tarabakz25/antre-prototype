import { Card, CardContent, CardHeader } from '../../components/Card';
import { mockKPIData } from '../../data/mockData';

export default function DashboardPage() {
  const { 
    totalProjects, 
    activeProjects, 
    totalStudents, 
    mentorSessions, 
    monthlyGrowth,
    projectsByTech,
    monthlyStats 
  } = mockKPIData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          KPI ダッシュボード
        </h1>
        <p className="text-lg text-gray-600">
          サービスの利用状況と成長指標をリアルタイムで確認できます。
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {totalProjects}
            </div>
            <div className="text-sm text-gray-600 mb-1">総プロジェクト数</div>
            <div className="text-xs text-green-600">
              +{monthlyGrowth}% 今月
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {activeProjects}
            </div>
            <div className="text-sm text-gray-600 mb-1">アクティブプロジェクト</div>
            <div className="text-xs text-gray-500">
              継続率: {Math.round((activeProjects / totalProjects) * 100)}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {totalStudents}
            </div>
            <div className="text-sm text-gray-600 mb-1">参加学生数</div>
            <div className="text-xs text-blue-600">
              平均 {Math.round(totalProjects / totalStudents * 10) / 10} プロジェクト/人
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {mentorSessions}
            </div>
            <div className="text-sm text-gray-600 mb-1">メンターセッション</div>
            <div className="text-xs text-purple-600">
              今月実施済み
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Growth Chart */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              月次成長推移
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyStats.map((stat, index) => (
                <div key={stat.month} className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-700">
                    {stat.month}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>{stat.projects} プロジェクト</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>{stat.students} 学生</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>{stat.sessions} セッション</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack Distribution */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              技術スタック別プロジェクト数
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(projectsByTech)
                .sort(([,a], [,b]) => b - a)
                .map(([tech, count]) => (
                <div key={tech} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-gray-700">
                      {tech}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ 
                          width: `${(count / Math.max(...Object.values(projectsByTech))) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 w-8 text-right">
                      {count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              成功指標
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">3ヶ月継続率</span>
                <span className="text-lg font-semibold text-green-600">70%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">平均開発期間</span>
                <span className="text-lg font-semibold text-blue-600">2.3ヶ月</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">公開成功率</span>
                <span className="text-lg font-semibold text-purple-600">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">メンター満足度</span>
                <span className="text-lg font-semibold text-orange-600">4.8/5.0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">
              最近のアクティビティ
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    新しいプロジェクトが公開されました
                  </div>
                  <div className="text-xs text-gray-500">
                    StudyBuddy - 2時間前
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    メンターセッションが完了
                  </div>
                  <div className="text-xs text-gray-500">
                    田中太郎 × 高専太郎 - 4時間前
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    新しい学生が参加
                  </div>
                  <div className="text-xs text-gray-500">
                    大学花子 - 6時間前
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    テンプレートが更新されました
                  </div>
                  <div className="text-xs text-gray-500">
                    Next.js Starter v2.1 - 8時間前
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
