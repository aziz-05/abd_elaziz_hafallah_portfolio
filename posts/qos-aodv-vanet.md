---
title: 'Quality of Service Analysis In Vehicular
Communication'
date: '2021-07-01'
desc: 'Based on the original AODV Protocol, The QoS-AODV is designed to improve the quality of service in VANETs to achieve reliable and
efficient communication by providing the users a good service and features in terms of network delay, bandwidth, packet loss.'
image: '/images/09.jpg'
---
In the driving environment, road accidents are among the biggest causes of death in the world.
Vehicular Ad hoc NETworks provide a good solution to minimise mortality and enhance driving conditions.

We find in VANETs three manners of communications: inter-vehicle communication (Vehicle To Vehicle, V2V).
communication of vehicles with nearby static infrastructure(Vehicle To Infrastructure, V2I),
and Hybrid communication. Through these communications, numerous applications are created where
most of them centre on improving the safety of road users. At the same time, new issues are created
due to the uniqueness features of VANETs.

Quality of Service in VANETs represents a hot and challenging topic for researchers.
It is highly affected by the high mobility, frequent disconnection and
changing topology. In this document, we propose a new routing protocol to provide
Quality of Service for safety applications traffic, we validated our approach under
the simulation platform NS2-35, then we present and discuss the simulation experiments
and the performance achieved by our solution

Our protocol called QoS-AODV improves the quality of service in the VANET
network by maintaining two routes to the destination instead of one. In addition
to the default path calculated by AODV, we define a second one called NPD (The
Nearest Path to the Destination). This latter assures more efficiency and reliability
for the packet reception.
