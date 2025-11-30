<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Masuk Angin',
                'description' => 'Hangatkan tubuh dan redakan gejala. Jamu tradisional racikan UMKM ini dirancang khusus untuk mengatasi masuk angin, memberikan kehangatan alami dari rempah pilihan, dan memulihkan stamina Anda.',
                'image' => 'cat1.jpg',
            ],
            [
                'name' => 'Batuk',
                'description' => 'Solusi alami melegakan tenggorokan. Jamu tradisional buatan UMKM ini efektif meredakan batuk, diformulasikan dari rempah yang menenangkan saluran pernapasan.',
                'image' => 'cat2.jpg'
            ],
            [
                'name' => 'Flu',
                'description' => 'Tingkatkan imunitas dan lawan flu. Dapatkan kembali kebugaran Anda dengan jamu tradisional racikan UMKM yang kaya manfaat untuk memperkuat daya tahan tubuh.',
                'image' => 'cat3.jpg'
            ],
            [
                'name' => 'Nyeri Sendi',
                'description' => 'Gerak lebih ringan dan tanpa batas. Ramuan tradisional UMKM ini diformulasikan untuk membantu meredakan nyeri sendi, membuat tubuh terasa lebih lentur dan nyaman bergerak.',
                'image' => 'cat4.jpg'
            ],
            [
                'name' => 'Sakit Kepala',
                'description' => 'Ketenangan untuk kepala Anda. Rasakan sensasi menenangkan dari jamu racikan UMKM ini. Solusi alami untuk meredakan sakit kepala dan mengembalikan fokus.',
                'image' => 'cat5.jpg'
            ],
            [
                'name' => 'Badan Lemas',
                'description' => 'Isi ulang energi dan semangat Anda. Usir badan lemas dengan jamu tradisional UMKM penyegar. Dibuat dari rempah peningkat vitalitas yang siap mengembalikan semangat dan energi Anda!',
                'image' => 'cat6.jpg'
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
