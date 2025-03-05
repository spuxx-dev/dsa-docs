---
layout: layouts/main.astro
---

# Kampfregeln

Die folgenden Kampfregeln sind eine Vereinfachung der Regeln, die in [Wege des Schwertes](https://pnp.spuxx.dev)
beschrieben sind. Wenn nicht anders angegeben, gelten die Originalregeln.

## Initiative

Zu Beginn eines Kampfes wird die Initiative aller Kampfteilnehmer berechnet.
Die Initative gibt vor, in welcher Reihenfolge die Kampfteilnehmer zum Zug kommen.

<span class="ra ra-perspective-dice-one"></span> `INI-Basiswert + Waffen-Modifikator + 1W6`

## Kampfrunde

Jeder Kampfteilnehmer kann während einer Kampfrunde standardmäßig **zwei normale Aktionen** ausführen.
Hinzu kommt eine sog. **freie Aktion**. Als Faustregel gilt: Eine normale Aktion ist eine Aktion,
die die volle Aufmerksamkeit erfordert. Eine freie Aktion ist eine Aktion, die auch gut "nebenbei"
erledigt werden kann.

| Beispiel                        | Aktionstyp     |
| ------------------------------- | -------------- |
| Attacke, Parade oder Ausweichen | Normale Aktion |
| Umsehen, Orientieren oder Rufen | Freie Aktion   |

## Ausdauer

Bestimmte Aktionen im Kampf kosten Ausdauer. Die Ausdauerkosten hängen von der Art des Aktion
sowie von der Behinderung ab (Rüstungsgewöhnung wird hier voll angerechnet), beträgt aber mindestens 1.
Alle genannten Ausdauerkosten wirken akkumulativ.

| Aktion                     | Ausdauerkosten      |
| -------------------------- | ------------------- |
| Attacke/Parade/Ausweichen  | 1 AuP               |
| Manöver (z.B. Wuchtschlag) | Erschwerung x 1 AuP |
| Gezieltes Ausweichen       | BE x 2 AuP          |

Ein Held kann **Atem holen**, um Ausdauer in Höhe seiner **Konstitution** zu regenerieren.
Dazu muss er zwei Aktionen in Folge keinerlei Handlungen durchführen. Betragen die Ausdauerpunkte
des Helden 0, kann er keine der o.g. Aktionen durchführen.

## Fernkampf

### Modifikatoren

Für Probenmodifikatoren im Fernkampf nutzen wir folgende, vereinfachte Tabelle. Die Modifikatoren
umfassen zum Beispiel Auswirkungen von Zielgröße, Deckung oder Entfernung.

| Art                     | Modifikator |
| ----------------------- | ----------- |
| Einfacher Schuss        | -2          |
| Normaler Schuss         | +0          |
| Schwieriger Schuss      | +4          |
| Sehr schwieriger Schuss | +8          |

## Glücklicher Angriff

Einen kritischen Treffer erzeugt man, indem man in einem Angriffswurf eine 1 würfelt und anschließend
einen Bestätigungswurf besteht (bei Zaubern müssen zwei von drei Würfeln eine 1 zeigen, dafür entfällt
der Bestätigungswurf).
Die Abwehr eines kritischen Treffers (Parade, Ausweichen etc.) ist um den halben Wert erschwert.
Kritische Treffer verursachen immer doppelten Schaden.

## Glückliche Abwehr

Eine glückliche Parade (oder glückliches Ausweichen) erzeugt man, indem man in einem
Verteidugungswurf eine 1 würfelt und anschließend einen Bestätigungswurf besteht.
Glückliche Paraden oder glückliches Ausweichen verbrauchen keine Aktion.

## Patzer

Patzer bei Angriffen oder Verteidigungen können zufällige Ereignisse zur Folge haben.
Das Ereignis wird mit Hilfe von 2W6 festgestellt (siehe Meisterschirm, Patzertabelle).

- 2: Waffe zerstört
- 3-5: Sturz, erfordert 1 Aktion & GE-Probe erschwert um BE zum Aufstehen
- 6-8: Stolpern, INI -2
- 9-10: Waffe verloren, erfordert 1 Aktion & GE-Probe zum Aufheben
- 11: An eigener Waffe verletzt, verursacht halben Waffenschaden
- 12: Schwerer Eigentreffer, verursacht vollen Waffenschaden

## Bruchfaktor

Der Bruchfaktor beschreibt den Zustand eines Ausrüstungsgegenstandes. Eine Waffe bricht, wenn:

<span class="ra ra-perspective-dice-one"></span> `2W6 <= Bruchfaktor`

Bei jeder Bruchfaktorprobe steigt der Bruchfaktor um 1.
Die folgenden Ereignisse können Bruchfaktorproben auslösen:

- Patzer (siehe #patzer)
- Parade eines kritischen Treffers (sowohl Verteidiger als auch Angreifer)
- Glückliche Parade (nur Angreifer)
