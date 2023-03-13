# Auguste App

## Features/Screens

- Startscreen
- Galerie -> Hochladen von Bildern in die App und Vergabe von beschriftungen
- Hilfe (drei Texte - Anleitung, Idee und Kontakt)
- Speiele:
  - Auswahl der Spiele mit Icon
  - Wahl der Schwierigkeit
  - Spiel (s.u.)
  - Gewonnen/Neustarten-Screen

## Spiele

Die Spiele können in 3 Schwierigkeitsstufen gespielt werden (leicht/mittel/schwer).

Über einen Zurück-Button kann das Spiel jederzeit abgebrochen werden.

### Aufdecken

- Ein Feld aus 3x2/4x3/5x4 zufällig angeordneten Fotos
- Die Fotos kommen jeweils doppelt als Paar vor
- Die Felder sind initial "zugedeckt"
- Der Spieler kann zwei Felder aufdecken, passen die Fotos zusammen, werden die Felder entfernt, sonst werden sie wieder zugedeckt
- Das Spiel ist gewonnen, wenn alle Felder entfernt wurden

### Merken

- Es werden 1/2/3 zufällige Fotos gezeigt (keine Duplikate)
- Der Spieler muss sich die Fotos merken
- Der Spieler bestätigt mit "weiter"
- Dem Spieler werden nun in 5/7/9 Runden jeweils 2/3/4 zufällige Fotos gezeigt
- Der Spieler muss nun das/die Fotos auswählen, die er sich gemerkt hat
- Wählt der Spieler ein korrektes Foto aus, wird ein Haken angezeigt, sonst ein Kreuz
- Es kann sein, dass kein gemerktes Foto angezeigt wird
- Der Spieler bestätigt die Auswahl mit "weiter"
- Dem Spieler wird die Auflösung der Fotos gezeigt (Haken)
- Nach der letzten Runde wird entweder ein "Gewonnen"- oder ein "Verloren"-Bild angezeigt
- TODO: Was sind die Kriterien für ein "Gewonnen"-Bild?

### Raten

- Ein zufälliges Foto wird in 2x2/3x3/4x4 Bereiche aufgeteilt
- Die Bereiche werden "zugedeckt"
- Es werden 2/3/4 zufällige Bereiche hervorgehoben
- Der Spieler soll sich diese Bereiche merken
- Sobald der Spieler einen dieser Bereiche anklickt, verschwindet die Hervorhebung
- Der Spiler kann nun weiter Bereiche anklicken bis alle ursprünglich hervorgehobenen Bereiche aufgedeckt sind
- Der Spieler bekommt nun 3/4/4 Beschreibungen angezeigt, wovon ein dem Foto entspricht, die anderen sind zufällig
- Wählt der Spieler eine falsche Beschreibung aus werden 2/3/4 weitere Felder hervorgehoben
- Der Spieler kann weiter einmal hervorgehobene Bereiche anklicken
- Die Auswahl der Beschriftungen bleibt stehen, bis der Spieler die zum Foto passende Beschreibung auswählt


### Suchen

- Das Spiel wird 5/8/10 Runden gespielt
- Es werden 3x2/4x3/5x4 zufällige Fotos angezeigt
- Es wird eine Beschriftung angezeigt, die einem der Fotos entspricht
- Der Spieler soll das Foto mit der angezeigten Beschriftung finden
- Der Spieler kann ein Feld anklicken. Ist es das zur Beschriftung passende Feld, wird ein Haken angezeigt, sonst ein Kreuz
- Die Runde ist gewonnen, wenn das richtige Feld gefunden wurde
- Das Spiel ist gewonnen, wenn alle Runden gewonnen wurden

### Verbinden

- Es werden 3x2/4x3/5x4 zufällige Fotos angezeigt
- Die Fotos kommen jeweils doppelt als Paar vor
- Der Spieler soll die Paare finden
- Der Spieler klickt nacheinander auf zwei Felder, gewählte Felder werden hervorgehoben
- Passen die Fotos zusammen, werden die Felder entfernt
- Das Spiel ist gewonnen, wenn alle Felder entfernt wurden

### Erkennen

- Das Spiel wird 9 Runden gespielt
- Es wird ein zufälliges Foto angezeigt
- Es werden 3/4/5 Beschriftungen angezeigt, wovon eine dem Foto entspricht, die anderen sind zufällig
- Der Spieler soll die zum Foto passende Beschriftung auswählen
- Wählt der Spieler eine falsche Beschriftung aus wird ein Kreuz angezeigt
- Wählt der Spieler die richtige Beschriftung aus ist die Runde gewonnen

### Zahlen verbinden

- Das Spiel wird 10 Runden gespielt
- Es werden 4/5/6 dreistellige Zahlen gezeigt
- Zwei Zahlen sind aufeinanderfolgend, die anderen zufällig und nicht aufeinanderfolgend oder doppelt
- Der Spieler soll die 2 aufeinanderfolgenden Zahlen finden
- Der Spieler kann zwei Felder anklicken. Die Felder werden hervorgehoben
- Sind die Felder aufeinanderfolgend werden diese grün hervorgehoben und die Runde ist gewonnen
- Sonst werden die Felder rot hervorgehoben und nach einer Zeit wieder normal angezeigt


### Boote zählen

- Es gibt weiße, gelbe, grüne, rote und schwarze Boote
- Es wird eine zufällige Farbe gewählt
- Dem Spieler wird die Farbe genannt
- Der Spieler startet das Spiel mit "Los!"
- Es wird eine Animation gezeigt in der eine zufällige Anzahl Boote verschiedener Farben auf dem Bildschirm seitwärts bewegt werden
- Der Spieler soll die Anzahl der Boote dieser Farbe zählen
- Nach der Animation werden dem Spieler drei Optionen angezeigt
- Wählt der Spieler die richtige Anzahl aus wird ein Haken angezeigt und das Spiel ist gewonnen
- Wählt der Spieler eine falsche Anzahl aus wird ein Kreuz angezeigt
- TODO: Wie viele Boote bei welcher Schwierigkeit?

### Geld zählen

- Dem Spieler wird eine zufällige Summe genannt
- Es werden alle Euro und Cent Münzen Scheine von 1ct bis 500€ gezeigt
- Der Spieler soll die optimale Anzahl Münzen und Scheine auswählen, um die Summe zu erreichen
- Dazu kann der Spieler die Münzen und Scheine anklicken
- Ist die Auswahl korrekt wird die Summe reduziert
- Das Spiel ist gewonnen, wenn die Summe 0 erreicht
- TODO: Welche Regeln für die Summe bei welcher Schwierigkeit?