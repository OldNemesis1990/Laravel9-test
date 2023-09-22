<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\Interest;
use Faker\Generator as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // You can set a default password
            'activated' => (bool)rand(0, 1),
        ];
    }
    
    public function configure()
    {
        return $this->afterCreating(function (User $user) {
            $user->assignRole('user');
            $user->userInfo()->create([
                'mobile_number' => $this->faker->phoneNumber,
                'sa_id' => $this->faker->unique()->numerify('#############'), // Adjust the format as needed
                'birth_date' => $this->faker->date,
                'language' => $this->faker->languageCode,
            ]);

            // Define your list of interests
            $interests = [
                'Acting','Art collecting','Being a DJ','Calligraphy','Crocheting','Dancing','Designing clothing','Drawing','Freestyling','Glassblowing','Graphic design','Jewelry making','Improvisation','LARPing','Metalworking','Needlepoint','Origami','Painting','Photography','Playing a musical instrument','Podcasting','Poetry','Pottery','Quilting','Record collecting','Scrapbooking','Soap making','Stand-up comedy','Weaving','Web design','Welding','Wood burning','Woodworking','Writing','Baking','Bread making','Brewing','Cheese-making','Cooking','Mixology','Winemaking','Wine tasting','Billiards','Board games','Card games','Chess','Crossword puzzles','Escape rooms','Fantasy sports','Jigsaw puzzles','Lego sets','Model trains','Paintball','Remote airplanes','Remote cars','Table tennis','Trivia','Video games','Amateur radio','Bonsai','Book collecting','Candle-making','Election forecasting','Focus groups','Furniture restoration','Genealogy','Investing','Journaling','Karaoke','Knitting','Local historical society','Makeup','Movie reviews','Museum visiting','Reading','Robot combat','Taxidermy','Thrifting','Wikipedia editing','Astronomy','Beekeeping','Bird watching','Camping','Car racing','Composting','Drones','Farming','Fishing','Flying','Gardening','Geocaching','Home improvement projects','Launching rockets','Metal detecting','Meteorology','National Park Travelers Club','Sailing','Scuba diving','Shuffleboard','Skydiving','Traveling','Vehicle restoration','Astronomy','Beekeeping','Bird watching','Camping','Car racing','Composting','Drones','Farming','Fishing','Flying','Gardening','Geocaching','Home improvement projects','Launching rockets','Metal detecting','Meteorology','National Park Travelers Club','Sailing','Scuba diving','Shuffleboard','Skydiving','Traveling','Vehicle restoration','Archery','Backpacking','Bowling','Bungee jumping','Crossfit','Disc golfing','Golfing','Gymnastics','Handball','Hiking','Horseback riding','Ice skating','Juggling','Kayaking','Kite surfing','Martial arts','Powerlifting','Rock climbing','Running','Skiing','Slacklining','Snowboarding','Surfing','Swimming','Water skiing','Yoga','Animal breeding','Animal grooming','Pet fostering'
            ];

            $userInterestNames = [];

            // Create random interests for the user
            foreach (range(1, $this->faker->numberBetween(1, count($interests))) as $index) {
                $interestName = $this->faker->randomElement($interests);

                // Check if this interest name has already been used for this user
                if (!in_array($interestName, $userInterestNames)) {
                    $userInterestNames[] = $interestName;

                    // Create a new interest record or retrieve an existing one
                    $interest = Interest::firstOrCreate([
                        'user_id' => $user->id,
                        'interest_name' => $interestName,
                    ]);
                }
            }
        });
    }
}
