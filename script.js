$(document).ready(function(e) {
	var $rps = false;
	var $options;
	var $message;
	var $winCount = 0;
	var $lossCount = 0;
	var $tieCount = 0;
	var $moveCount = 0;
	if ($rps == true) {
		$options = ['rock', 'paper', 'scissors'];
	} else {
		$options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
	}

	$('button').click(function(e) {
		var $this = $(this);
		var $selection = $this.data('play');
		var $play = play($selection);
		$('button').removeClass();
		$this.addClass($play);
		$('.result').empty().html('<div class="animated fadeOutUp">' + $message + '</div>');
	});

	function play($selection) {
		var $winners = {
			rock: ['scissors', 'lizard'],
			paper: ['rock', 'spock'],
			scissors: ['paper', 'lizard']
		}
		var $cpuPlays = randomPlay($options);		
		if ($selection === $cpuPlays) {
			$message = ' ikisi tokuştu ' + $selection;
			$moveCount++;
			$tieCount++;
			recordScore(' enegledi ', $selection, $cpuPlays);
			return ' engeledi ';
		}
		if($winners[$cpuPlays].indexOf($selection) == -1) {
			$message = $selection + ' vurdu ' + $cpuPlays;
			$moveCount++;
			$winCount++;
			recordScore('kazandı ', $selection, $cpuPlays);
			return 'kazandı';
		}
		if($winners[$selection].indexOf($cpuPlays) == -1) {
			$message = $selection + ' karşı kaybeden ' + $cpuPlays;
			$moveCount++;
			$lossCount++;
			recordScore('loss', $selection, $cpuPlays);
			return 'loss';
		}
		return 'none';}
	function randomPlay($arr) {
		return $arr[Math.floor(Math.random() * $arr.length)];}
	function recordScore($type, $player, $cpu) {
		$('aside').prepend('<div class="history-item ' + $type + '"><i class="fa fa-hand-' + $player + '-o"></i><i class="fa fa-hand-' + $cpu + '-o"></i></div>');
		$('.scoreboard .win span').text($winCount);
		$('.scoreboard .tie span').text($tieCount);
		$('.scoreboard .loss span').text($lossCount);
		$('.scoreboard .move span').text($moveCount);
	}
});