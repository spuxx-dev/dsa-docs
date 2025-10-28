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

## Ausweichen

Ein Held kann Ausweichen, um einen Angriff abzuwehren.

<span class="ra ra-perspective-dice-one"></span> `PA-Basis - BE`

Weicht ein Held aus, um einen Angriff abzuwehren, springt er im Grunde zur Seite. Es ist wahrscheinlich,
dass er sich anschließend in einer für ihn ungünstigen Position wiederfindet. Seine INI sinkt um zwei Punkte
und er muss eine Aktion aufbringen, um sich wieder in Position zu bringen.

Alternativ dazu kann ein Held **gezielt ausweichen**. Beim Gezielten Ausweichen wird die Erschwerung
in **doppelter Höhe** angerechnet. Dafür erleidet der Held keinen INI-Verlust und muss sich nicht
wieder in Position bringen.

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

Die Abwehr eines kritischen Treffers (Parade, Ausweichen etc.) ist um den halben Wert erschwert. Wird ein kritischer Treffer pariert, muss der Verteidiger eine Bruchfaktorprobe ablegen. Wird der Angriff nicht pariert, verursacht ein kritischer Treffer doppelten Schaden.

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

## Wunden

Richtet ein Angriff mit einer Waffe `> KO/2` (Wundschwelle) Schadenspunkte an, erleidet der getroffene Kampfteilnehmer eine Wunde. Ist der Schaden sogar größer als die Konstitution des Ziels, erleidet es zwei Wunden. Bestimmte Sonderfertigkeiten, Waffen und Kampfmanöver können diese Schwellwerte verändern. Wunden können auch durch Stürze o.ä. entstehen.

Eine Wunde hat zur Folge, dass `AT`-, `PA`- `FK`-, `INI`-Basiswert sowie `GE`-Wert sofort um 2 Punkte sowie die `GS` um 1 Punkt sinken.

## Schwere Treffer

Treffer, die 20 oder mehr `TP` anrichten (also vor Abzug der Rüstung) sind sog. schwere Treffer. Schwere Treffer beschädigen die getroffene Rüstung, ihr `BE`-Wert steigt um 1 Punkt. Diese Beschädigung lässt sich nur durch die Anwendung eines geeigneten Talents (_Grobschmied_, _Lederarbeiten_) rückgängig machen.

Darüber hinaus sind schwere Treffer unheimlich schmerzhaft. Der getroffene Held muss eine _Selbstbeherrschungs_-Probe ablegen, um auf den Beinen zu bleiben. Misslingt die Probe, geht der Held für `1W6+3` Kampfrunden bewusstlos zu Boden.

## Distanzklassen

Waffen sind unterschiedlich lang, was durch die sogenannten Distanzklassen (`DK`) angegeben wird (sortiert von kurz nach lang): Handgemenge (`H`), Nahkampf (`N`), Stangenwaffe (`S`) und Pike (`P`).

Treten Kampfteilnehmer mit Waffen unterschiedlicher Länge gegeneinander an, gelten folgende Regeln:

- Der Kampf beginnt in der Distanzklasse, die vom Kämpfer mit der höheren Initiative gewünscht ist (und die seine Waffe unterstützt).
- Will ein Kämpfer die Distanzklasse verringern, muss ihm eine Attacke gelingen. Der Gegner kann die Attacke parieren oder ihr ausweichen. Gelingt die Attacke, so wird die Distanzklasse reduziert. Misslingt sie, verändert sich die Distanzklasse nicht. Der Angriff verursacht keinen Schaden, es sei denn, der Kämpfer belegt den Angriff mit einer zusätzlichen Erschwerung von 8 Punkten.
- Will ein Kämpfer die Distanzklasse erhöhen, muss ihm eine Attacke oder eine Ausweichen-Probe gelingen (wählbar), die um 4 Punkte erschwert ist (bzw. 8 Punkte, wenn Distanzklasse um 2 erhöht werden soll). Die Aktion kann nicht pariert werden. Gelingt die Aktion, so wird die Distanzklasse erhöht. Misslingt sie, verändert sich die Distanzklasse nicht. Der Angriff verursacht keinen Schaden.

Kämpft ein Held in einer Distanzklasse, die sich vom Wert der Waffe unterscheidet, gelten folgende Regeln:

| Situation                               | Wirkung                   |
| --------------------------------------- | ------------------------- |
| Waffe zwei oder mehr Kategorien zu kurz | `AT` unmöglich, `PA` +/-0 |
| Waffe eine Kategorie zu kurz            | `AT` -6, `PA` +/-0        |
| Waffe eine Kategorie zu lang.           | `AT` -6, `PA` -6          |
| Waffe zwei oder mehr Kategorien zu lang | AT und PA unmöglich       |
