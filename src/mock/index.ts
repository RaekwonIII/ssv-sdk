const fetchedOperators = [
  {
    id: '220',
    publicKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBekNmRmZxSkN1RFlOdnIydncveWsKZ3NzNW5wa2l5QW0xRFRZcEVDbW5iaEl4QjU4RlpHdnRGYWU1ZUx5dzlVTTdUZXRBSk5uVVpienE3a3Q2Y3VNQgpocFUzNDZpeFVMUVA1aXpYS0VvNVJYN1VCTXVMMmppRGlQMldKcERjQURsMGNmTE1ZbU5KenhMeXllZHNwbnlaCmFlQUJ6V0NrLzFzaGNrMXhGZEFKd2tzR1BxVm1GeHZhdkNrUEEwUFlSVWtKQUh1MFhQaW5NWGRlTXRJZXYrNVMKUEs4cXpIZFhZWHFvNm5zVmRJelArMXhyM1NWTnRmOURPYmkvalEyTExyRmZrTVFtZkVqOFNhN3I3RStJb3U2Mgo3bldTcHRmb2ZuNk1NTXYrTXNpcWZYMW1GdjF2TDlxK0ltNHVDZE1jK2VQY2JGaTdEdVdVdDhZMDdrQjBsalNzCjh3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K'
  },
  {
    id: '221',
    publicKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBMWVxTWkwZXh3d3BETDE2QWxub0oKODIzQURyUkFwcmpjWlErdGJOaGdUOXFJU0x2THlUaHNTQ3FqVElKTlNkUitDSzAwU28xV05pUmxEVyt1elZ5TAp2Y3VKNDNVMmQvdkxQUCtSUWo5eml1am1HOHllcWo1b2lPNlZaL2dXczdndytFS1BNcmxFSXp4eUwwY1BFWndwCk5IVmFNQWxaRHBxOXZUbkZJQ2lHSGI2bUZrd3g2eVJSdXlvTWxXQU5DdEhkcjZkK2xUcDlBVGpiVW5hSGxyLzQKR1ZoWWI5TExZU3ZTZ25SK2E0d1N0T3V6cTJlZlJ2RHB6Nll0MUgwZmFLdE9uZjFTRWhEV2Q2b0F3N0JWWEthNgpUam9JWVFRU1lqM1ZDNjhRVkljcWFEL29xM0V3a1UvK29ZWE5PQ2hJSGc1OEI3QnJCV0YxQi9uekdqTFVDRGs5Cjd3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K'
  },
  {
    id: '222',
    publicKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBeFpRaHliS3l1ZExtWXJoV2E1TVcKWlFLbnhqNGF4MWNrUHZrUnhvR0RFWjhiaXF6M3lQWENsUFRMRVVFYmEwTERMYXNDL3lkZFVZeXdSRlFBZStLaApkRHFzMkFzaVh0bGE2aUJ4YlhGK0V5bHRZd3IxN1RkLzIweUFuYUFtWEtHd1R1VG5IeTBpeTlLTWRJWlNRa0tuCmtDS1RKWHhML1ZuR1htOUNFSTJCSGROc1ZuRzhsZ3U1RktIaW5rOFNNS1ZmSUVxVCtiTmlUUUZvNGk2aEtjUFYKbTluK1lUYm4zbnBWTWc0L0NsWTBieU94SFRJTk5uajZ1MUUxT2FCNTVveWp6aDUxcXdiQ2wzTFNiWmdTVy81Wgp3MXpMTk10M25xMU5rbXkrZHlvMjVVMEUyYm1uRHBzSzlFSFR3b0wxaUd1TjhxRDAzYVFkamRSc0FjYTRzRjRGCld3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K'
  },
  {
    id: '223',
    publicKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBOXBYZ0F2Qk55emlYTzZWWGRJMXUKeEpvTnZWZlJPS09JaURhOHhOdURqMVJyZTJSVitkdlFycjRncHl6ZTBlZ0NoQ0RoNUhiSnRuSmUwWDFiL3dNNQoydm5NeEM1TlYxeENEbC9XekdrV00vd2VXeHRsUmladi9vdzJXQk4yZlB4STVuVUNnMERFcjcxc1RSemQ5N1c0CnpVLzMvbTJRVVpTMlRNdG03Um5rNmZneTVYN29KMk1qMlp3OEV1M2haZ0gwTjlVdWdTUkNQdFFBZ3FBWFZMekUKemJJK3BvR0g4d1V2Szl4bkVFSSs5Ky9qTWhxM1BzaXRzQ3NORmtVODVZTlRFZGpEYkRvVzVBa3RtZ1Nhb1FtRgpaWEdVMUpWOUdMRjd1UXRCeFQrSEJuTm1sWlp5MXA2c2lVSnR3TEhTbGVhek1BK2kzWXdnQ3NZY2VDb3hxSnFFClFRSURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K'
  }
]

export const operators = {
  keys: fetchedOperators.map((o) => o.publicKey),
  ids: fetchedOperators.map((o) => o.id),
}
