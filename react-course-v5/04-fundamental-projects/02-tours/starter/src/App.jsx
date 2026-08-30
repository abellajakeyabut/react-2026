<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Raspberry Pi Monitoring Dashboard</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-light">
<div class="container my-4">
    <h1 class="mb-4 text-center">Raspberry Pi Monitoring Dashboard</h1>

    {% for name, info in data.items() %}
    <div class="card mb-4">
        <div class="card-header bg-primary text-white">
            {{ name }}
        </div>
        <div class="card-body">
            {% if info.error %}
                <p class="text-danger">Error: {{ info.error }}</p>
            {% else %}
                <div class="row">
                    <div class="col-md-4">
                        <canvas id="chart-{{ name }}"></canvas>
                    </div>
                    <div class="col-md-8">
                        <h5>Processes</h5>
                        <table class="table table-sm table-striped">
                            <thead>
                                <tr>
                                    <th>PID</th>
                                    <th>Name</th>
                                    <th>CPU %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for p in info.processes %}
                                <tr>
                                    <td>{{ p.pid }}</td>
                                    <td>{{ p.name }}</td>
                                    <td>{{ p.cpu_percent }}</td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Storage Table -->
                <h5 class="mt-4">Storage</h5>
                <table class="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Drive</th>
                            <th>Total (GB)</th>
                            <th>Used (GB)</th>
                            <th>Free (GB)</th>
                            <th>Usage %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {% for drive, stats in info.health.disk.items() %}
                        <tr>
                            <td>{{ drive }}</td>
                            <td>{{ (stats.total / (1024**3)) | round(2) }}</td>
                            <td>{{ (stats.used / (1024**3)) | round(2) }}</td>
                            <td>{{ (stats.free / (1024**3)) | round(2) }}</td>
                            <td>{{ stats.percent }}</td>
                        </tr>
                        {% endfor %}
                    </tbody>
                </table>

                <script>
                    const ctx{{ name }} = document.getElementById('chart-{{ name }}').getContext('2d');
                    new Chart(ctx{{ name }}, {
                        type: 'doughnut',
                        data: {
                            labels: ['CPU %', 'Memory %'],
                            datasets: [{
                                data: [
                                    {{ info.health.cpu }},
                                    {{ info.health.memory }}
                                ],
                                backgroundColor: ['#007bff', '#28a745']
                            }]
                        },
                        options: {
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Resource Usage'
                                }
                            }
                        }
                    });
                </script>
            {% endif %}
        </div>
    </div>
    {% endfor %}
</div>
</body>
</html>
