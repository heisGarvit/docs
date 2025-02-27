---
title: Install Promscale using a Docker image
excerpt: Install Promscale using Docker
product: promscale
keywords: [analytics, Docker]
tags: [install]
related_pages:
  - /promscale/:currentVersion:/guides/resource-recomm/
  - /promscale/:currentVersion:/send-data/
---

import PromscaleSendData from "versionContent/_partials/_promscale-send-data.mdx";

# Install Promscale Connector using a Docker image with Timescale Cloud

You can install Promscale Connector from a Docker container using
Timescale Cloud. This is useful for developing a proof of concept, or
for testing purposes. Do not use this method in a production environment.

<highlight type="warning">
Running Promscale from a Docker container is not suitable for production
environments. This can be useful for testing purposes and is provided here as an
example only.
</highlight>

## Before you begin

1.  Install Docker on your local system. For packages and instructions, see
     the [Docker installation documentation][docker-install].
1.  Create a [TimescaleDB service][create-service] on Timescale Cloud.

<procedure>

### Installing Promscale using Docker

1.  Run the [Promscale Connector][promscale-docker-image] container on a network
    named `promscale`. Set the port forwards to port `9201` on your local
    system. Replace `TS_CLOUD_DB_URI` with the `Service URL` that you made note
    of when you created the TimescaleDB service:

    ```bash
    docker run --name promscale -d -p 9201:9201 \
    -db.uri=<TS_CLOUD_DB_URI>
    ```

</procedure>

<PromscaleSendData />

For upgrading Promscale Connector, see the [upgrade][upgrade-promscale] section.

[docker-install]: https://docs.docker.com/get-docker/
[promscale-docker-image]: https://hub.docker.com/r/timescale/promscale/tags
[create-service]: /promscale/:currentVersion:/installation/promscale-with-timescale-cloud/
[upgrade-promscale]: /promscale/:currentVersion:/guides/upgrade/
