Der Dojo Termin am Montag fällt auf das Sprintende vom CRM Team. Aus diesem Grund ziehe ich den Termin einen Tag vor auf den Freitag, damit auch das CRM teilnehmen kann. Die alte Serie habe ich noch nicht gelöscht oder angepasst, weil dann die Ausnahmen abgebrochen werden würden und dies dann mit den Buchungen über Outlook in Konflikt kommen kann. Ich werde den Montagstermin im neuen Monat nach dem buchen absagen. Ihr könnt ihn natürlich auch jetzt schon einmal absagen…


Sprache: javascript + jasmine

Diesmal gibt es eine neue Aufgabe mit dem Banking OCR. Diese Aufgabe erstreckt sich über mehrere User Stories, die nicht alle zu Beginn bekannt sind ? Die Aufgabe wird über mehrere Dojo Termine umgesetzt:
1.	Banking OCR bauen I
2.	Banking OCR bauen II ? wir sind hier und ein Einstieg ist natürlich trotzdem möglich
3.	Refactoring: Banking OCR (den Source von einem anderen Team)

Dojo: Banking OCR

Kata: Bank OCR
User Story 1
You work for a bank, which has recently purchased a spiffy
machine to assist in reading letters and faxes sent in by
branch offices. The machine scans the paper documents, and
produces a file with a number of entries which each look like
this:
_ _ _ _ _ _ _
| _| _||_||_ |_ ||_||_|
||_ _| | _||_| ||_| _|
Each entry is 4 lines long, and each line has 27 characters. The
first 3 lines of each entry contain an account number written
using pipes and underscores, and the fourth line is blank. Each
account number should have 9 digits, all of which should be
in the range 0-9. A normal file contains around 500 entries.
Your first task is to write a program that can take this file and
parse it into actual account numbers.

