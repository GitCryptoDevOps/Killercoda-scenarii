# Nmap

Nmap (https://nmap.org/) maps the networks:
- to find live hosts on the network,
- to perform port scanning,
- to ping sweeps,
- to detect OS,
- to detect version.

To validate that the website `ScanMe` is listening with the ports 22, 25, 80, and 443, create a `nmap.attack` file:

```
@slow
Feature: nmap attacks for scanme.nmap.org and to use this for your tests, change the value in the profile
  Background:
    Given "nmap" is installed
    And the following profile:
      | name           | value        |
      | hostname       | scanme.nmap.org   |
      | host           | scanme.nmap.org   |
      | tcp_ping_ports | 22,25,80,443 |

  Scenario: Verify server is open on expected set of ports using the nmap-fast attack step
    When I launch a "nmap-fast" attack
    Then the output should match /80.tcp\s+open/
```{{copy}}

To run this attack:

`docker run -t --rm=true -v $PWD:/working -w /working gauntlt nmap.attack`{{execute}}
