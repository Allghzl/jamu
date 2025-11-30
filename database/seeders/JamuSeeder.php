<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Jamu;

class JamuSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            1 => [ // MASUK ANGIN
                ['name' => 'Masuk Angin Original', 'price' => 19000, 'description' => 'Redakan kembung, meriang, dan pegal dengan racikan tradisional alami.'],
                ['name' => 'Masuk Angin Plus', 'price' => 25000, 'description' => 'Ekstra daya tahan tubuh, redakan masuk angin lebih cepat dengan racikan alami.'],
                ['name' => 'Masuk Angin Extra Hangat', 'price' => 21000, 'description' => 'Rasa lebih pedas-hangat dengan jahe merah, kapulaga, dan cengkeh.'],
                ['name' => 'Masuk Angin Herbal Mix', 'price' => 25000, 'description' => 'Racikan temulawak, sereh, daun mint, dan madu. Sensasi hangat aroma yang relax.'],
                ['name' => 'Masuk Angin Anak', 'price' => 15000, 'description' => 'Jahe kecil, temulawak, gula aren tipis, dan madu. Lebih ringan, manis alami, aman buat anak-anak.'],
                ['name' => 'Masuk Angin Teh Herbal', 'price' => 21000, 'description' => 'Racikan jahe, temulawak, dan daun teh hijau. Cocok buat kamu yang pengen jamu tapi vibes-nya kayak minum teh sehat.'],
                ['name' => 'Masuk Angin Plus Kayu Manis', 'price' => 22000, 'description' => 'Rasa unik dengan aroma kayu manis, jahe merah, dan gula aren. Hangat, manis, dan bikin rileks.'],
                ['name' => 'Masuk Angin Plus Sereh & Madu', 'price' => 24000, 'description' => 'Jahe & sereh segar dengan manis alami madu, hangat tapi tetap ringan.'],
            ],

            2 => [ // BATUK
                ['name' => 'Batuk Original', 'price' => 19000, 'description' => 'Redakan batuk kering maupun berdahak dengan campuran jahe dan madu alami.'],
                ['name' => 'Batuk Plus', 'price' => 25000, 'description' => 'Bantu kurangi batuk lebih cepat dengan tambahan ekstrak daun mint dan madu.'],
                ['name' => 'Batuk Extra Hangat', 'price' => 21000, 'description' => 'Jahe merah dan kayu manis bikin tenggorokan hangat dan lega.'],
                ['name' => 'Batuk Herbal Mix', 'price' => 25000, 'description' => 'Campuran sereh, cengkeh, daun mint dan madu untuk meredakan batuk alami.'],
                ['name' => 'Batuk Anak', 'price' => 15000, 'description' => 'Formulasi ringan dengan jahe kecil dan madu, aman buat anak-anak.'],
                ['name' => 'Batuk Teh Herbal', 'price' => 21000, 'description' => 'Racikan jahe, teh hijau, dan madu. Hangat tapi terasa ringan di tenggorokan.'],
                ['name' => 'Batuk Plus Kayu Manis', 'price' => 22000, 'description' => 'Perpaduan madu dan kayu manis untuk rasa unik yang menenangkan tenggorokan.'],
                ['name' => 'Batuk Plus Sereh & Madu', 'price' => 24000, 'description' => 'Sereh segar dan madu bantu redakan batuk lebih cepat.'],
            ],

            3 => [ // FLU
                ['name' => 'Flu Original', 'price' => 19000, 'description' => 'Atasi bersin dan hidung tersumbat dengan racikan tradisional alami.'],
                ['name' => 'Flu Plus', 'price' => 25000, 'description' => 'Tambahan antioksidan alami yang bantu tubuh melawan flu lebih cepat.'],
                ['name' => 'Flu Extra Hangat', 'price' => 21000, 'description' => 'Jahe merah dan kapulaga bikin badan hangat dan nafas lebih lega.'],
                ['name' => 'Flu Herbal Mix', 'price' => 25000, 'description' => 'Temulawak, sereh, daun mint, dan madu bantu redakan flu alami.'],
                ['name' => 'Flu Anak', 'price' => 15000, 'description' => 'Rasa ringan dan manis alami, cocok buat anak-anak yang lagi pilek.'],
                ['name' => 'Flu Teh Herbal', 'price' => 21000, 'description' => 'Racikan jahe, teh hijau, dan madu rasa herbal yang calming.'],
                ['name' => 'Flu Plus Kayu Manis', 'price' => 22000, 'description' => 'Hangat, manis, dan aroma kayu manis bantu melegakan pernafasan.'],
                ['name' => 'Flu Plus Sereh & Madu', 'price' => 24000, 'description' => 'Sereh dan madu alami bantu redakan flu lebih ringan.'],
            ],

            4 => [ // NYERI SENDI
                ['name' => 'Nyeri Sendi Original', 'price' => 19000, 'description' => 'Redakan pegal dan sendi kaku dengan jahe dan temulawak.'],
                ['name' => 'Nyeri Sendi Plus', 'price' => 25000, 'description' => 'Tambahan herbal anti-inflamasi bantu sendi lebih fleksibel.'],
                ['name' => 'Nyeri Sendi Extra Hangat', 'price' => 21000, 'description' => 'Jahe merah dan kayu manis beri efek hangat ke sendi dan otot.'],
                ['name' => 'Nyeri Sendi Herbal Mix', 'price' => 25000, 'description' => 'Jintan hitam, cengkeh, sereh, dan madu bantu atasi sendi kaku.'],
                ['name' => 'Nyeri Sendi Anak', 'price' => 15000, 'description' => 'Formulasi ringan buat nyeri otot ringan anak-anak.'],
                ['name' => 'Nyeri Sendi Teh Herbal', 'price' => 21000, 'description' => 'Rasa seperti teh herbal hangat plus efek rileks ke tubuh.'],
                ['name' => 'Nyeri Sendi Plus Kayu Manis', 'price' => 22000, 'description' => 'Hangat, wangi, dan bantu melancarkan aliran darah.'],
                ['name' => 'Nyeri Sendi Plus Sereh & Madu', 'price' => 24000, 'description' => 'Sereh dan madu bantu perbaiki sendi dari dalam.'],
            ],

            5 => [ // SAKIT KEPALA
                ['name' => 'Sakit Kepala Original', 'price' => 19000, 'description' => 'Redakan pusing ringan dengan racikan jahe dan daun peppermint.'],
                ['name' => 'Sakit Kepala Plus', 'price' => 25000, 'description' => 'Tambahan sereh dan madu alami bantu redakan sakit kepala lebih cepat.'],
                ['name' => 'Sakit Kepala Extra Hangat', 'price' => 21000, 'description' => 'Jahe merah dan kayu manis bantu lancarkan peredaran darah ke kepala.'],
                ['name' => 'Sakit Kepala Herbal Mix', 'price' => 25000, 'description' => 'Temulawak, sereh, daun mint dan madu bantu atasi migrain ringan.'],
                ['name' => 'Sakit Kepala Anak', 'price' => 15000, 'description' => 'Rasa lebih ringan, manis alami, dan aman buat anak-anak yang pusing.'],
                ['name' => 'Sakit Kepala Teh Herbal', 'price' => 21000, 'description' => 'Racikan teh hijau, jahe dan madu. Sensasi hangat yang relaxing.'],
                ['name' => 'Sakit Kepala Plus Kayu Manis', 'price' => 22000, 'description' => 'Aroma kayu manis dan jahe bantu bikin kepala lebih ringan.'],
                ['name' => 'Sakit Kepala Plus Sereh & Madu', 'price' => 24000, 'description' => 'Sereh segar dan madu bantu stabilkan aliran darah dan hilangkan pusing.'],
            ],

            6 => [ // BADAN LEMAS
                ['name' => 'Badan Lemas Original', 'price' => 19000, 'description' => 'Bantu pulihkan stamina dengan jahe dan temulawak murni.'],
                ['name' => 'Badan Lemas Plus', 'price' => 25000, 'description' => 'Tambahan ginseng dan madu bantu tingkatkan energi lebih cepat.'],
                ['name' => 'Badan Lemas Extra Hangat', 'price' => 21000, 'description' => 'Jahe merah dan sereh cocok buat badan meriang & capek total.'],
                ['name' => 'Badan Lemas Herbal Mix', 'price' => 25000, 'description' => 'Temulawak, jintan hitam, daun mint dan madu bantu pulihkan stamina.'],
                ['name' => 'Badan Lemas Anak', 'price' => 15000, 'description' => 'Rasa manis alami, aman buat anak yang habis aktivitas berat.'],
                ['name' => 'Badan Lemas Teh Herbal', 'price' => 21000, 'description' => 'Racikan jahe dan teh hijau bikin badan lebih fresh & rileks.'],
                ['name' => 'Badan Lemas Plus Kayu Manis', 'price' => 22000, 'description' => 'Perpaduan kayu manis dan madu bantu mengembalikan energi tubuh.'],
                ['name' => 'Badan Lemas Plus Sereh & Madu', 'price' => 24000, 'description' => 'Sereh segar dan madu bantu pulihkan tenaga lebih cepat.'],
            ],

        ];


        foreach ($categories as $categoryId => $jamus) {
            $localId = 1;
            foreach ($jamus as $jamu) {
                Jamu::create([
                    'local_id'    => $localId++,
                    'category_id' => $categoryId,
                    'name'        => $jamu['name'],
                    'description' => "Jamu " . $jamu['name'] . ' – ' . $jamu['description'],
                    'price'       => $jamu['price'],
                    'image'       => "jamu" . ($localId - 1) . ".jpg",
                ]);
            }
        }
    }
}
