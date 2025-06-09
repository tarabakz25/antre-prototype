'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../../components/Card';
import { Button } from '../../components/Button';
import { mockMentors } from '../../data/mockData';

export default function MentorsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState<string>('all');

  const expertiseOptions = [
    { value: 'all', label: 'すべて' },
    { value: 'React', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'Product Management', label: 'プロダクト' },
    { value: 'UI/UX', label: 'UI/UX' },
  ];

  const filteredMentors = selectedExpertise === 'all' 
    ? mockMentors 
    : mockMentors.filter(mentor => 
        mentor.expertise.includes(selectedExpertise)
      );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Mentor Marketplace
        </h1>
        <p className="text-lg text-gray-600">
          経験豊富なエンジニア・デザイナー・プロダクトマネージャーに30分単位で相談できます。
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">専門分野で絞り込み</h3>
        <div className="flex flex-wrap gap-2">
          {expertiseOptions.map((option) => (
            <Button
              key={option.value}
              variant={selectedExpertise === option.value ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedExpertise(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} hover>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {mentor.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-600">{mentor.experience}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {renderStars(mentor.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {mentor.rating} ({mentor.reviewCount}件)
                </span>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardHeader>

            <CardContent>
              {/* Bio */}
              <p className="text-sm text-gray-600 mb-4">
                {mentor.bio}
              </p>

              {/* Price */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-900">
                  ¥{mentor.pricePerSession.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">/ 30分</span>
              </div>

              {/* Available Slots */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  予約可能時間
                </h4>
                <div className="space-y-1">
                  {mentor.availableSlots.slice(0, 2).map((slot, index) => (
                    <div key={index} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {slot}
                    </div>
                  ))}
                  {mentor.availableSlots.length > 2 && (
                    <div className="text-xs text-gray-500">
                      他 {mentor.availableSlots.length - 2} 枠
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Button className="w-full">
                予約する
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          メンタリングの流れ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">メンター選択</h3>
            <p className="text-sm text-gray-600">
              専門分野や経験から最適なメンターを選択
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">時間予約</h3>
            <p className="text-sm text-gray-600">
              空いている時間枠から都合の良い時間を予約
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">セッション実施</h3>
            <p className="text-sm text-gray-600">
              Zoomで30分間のメンタリングセッション
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-lg">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">フォローアップ</h3>
            <p className="text-sm text-gray-600">
              セッション後のフィードバックと次のステップ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
