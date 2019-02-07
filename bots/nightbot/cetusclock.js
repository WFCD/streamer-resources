	$(eval (function(){var data = JSON.parse('$(urlfetch https://api.warframestat.us/pc/cetusCycle)'); return (data.day ? "Night" : "Day") + " starts in approx. " + data.timeLeft + ".";})())
