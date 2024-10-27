<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CardController extends Controller
{
    public function distribute(Request $request)
    {
        $totalContestant = $request->input('contestant', null);

        // Input validation
        if (!is_numeric($totalContestant) || $totalContestant <= 0) {
            return response()->json(['error' => 'Input value does not exist or value is invalid'], 400);
        }

        // Define the deck
        $suits = ['S', 'H', 'D', 'C'];
        $values = [1 => 'A', 2 => '2', 3 => '3', 4 => '4', 5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9', 10 => 'X', 11 => 'J', 12 => 'Q', 13 => 'K'];
        $deck = [];

        //show the card suit with value
        foreach ($suits as $suit) {
            foreach ($values as $key => $value) {
                $deck[] = "{$suit} => {$value}";
            }
        }

        // Shuffle the deck
        shuffle($deck);

        // Distribute the cards
        $distribution = array_fill(0, $totalContestant, []);

        foreach ($deck as $i => $card) {
            $distribution[$i % $totalContestant][] = $card;
        }

        // Format the output
        $output = [];
        foreach ($distribution as $personCards) {
            $output[] = implode(", ", $personCards);
        }

        return response()->json(['distribution' => $output]);
    }
}
